import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { CheckoutPlaceOrderComponent } from '@spartacus/checkout/base/components';
import { GlobalMessageService, RoutingService, User } from '@spartacus/core';
import { OrderFacade } from '@spartacus/order/root';
import { LAUNCH_CALLER, LaunchDialogService } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { throwError } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { RazorpayInitiateResponse, RazorpayPaymentResponse } from '../../../model';
import { RazorpayPaymentService } from '../../../services';

@Component({
  selector: 'cx-place-order',
  templateUrl: './readora-place-order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ReadoraPlaceOrderComponent extends CheckoutPlaceOrderComponent implements OnDestroy, OnInit {

  constructor(
    protected override orderFacade: OrderFacade,
    protected override routingService: RoutingService,
    protected override fb: UntypedFormBuilder,
    protected override launchDialogService: LaunchDialogService,
    protected override vcr: ViewContainerRef,
    protected razorpayPaymentService: RazorpayPaymentService,
    protected userAccountFacade: UserAccountFacade,
    protected globalMessageService: GlobalMessageService,
  ) {
    super(orderFacade, routingService, fb, launchDialogService, vcr);
  }

  override submitForm(): void {
    if (this.checkoutSubmitForm.valid) {

      this.placedOrder = this.launchDialogService.launch(
        LAUNCH_CALLER.PLACE_ORDER_SPINNER,
        this.vcr
      );

      this.razorpayPaymentService.initiatePayment().pipe(
        switchMap((initiateResponse: RazorpayInitiateResponse) =>
          this.userAccountFacade.get().pipe(
            filter((user): user is User => !!user),
            switchMap((user: User) =>
              this.razorpayPaymentService.openCheckout(
                initiateResponse.razorpayOrderId,
                initiateResponse.amount,
                initiateResponse.currency,
                user?.name ?? '',
                user?.uid ?? ''
              )
            ),
            map((paymentResponse: RazorpayPaymentResponse) => ({
              paymentResponse,
              initiateResponse
            }))
          ),
        ),

        switchMap(({ paymentResponse, initiateResponse }) =>
          this.orderFacade.placeOrder(this.checkoutSubmitForm.valid).pipe(
            catchError((err) => {
              //Modal to handle order failed case to let user know that refund is processed.
              return this.razorpayPaymentService.initiateRefund(
                paymentResponse.razorpay_payment_id,
                initiateResponse.amount
              ).pipe(
                switchMap(() => throwError(() => ({
                  type: 'ORDER_FAILED_REFUND_INITIATED'
                })))
              );
            })
          )
        )
      ).subscribe({
        next: () => this.onSuccess(),
        error: (err) => {
          this.dismissSpinner();
        }
      });
    } else {
      this.checkoutSubmitForm.markAllAsTouched();
    }
  }

  private dismissSpinner(): void {
    if (!this.placedOrder) return;
    this.placedOrder.subscribe((component) => {
      this.launchDialogService.clear(LAUNCH_CALLER.PLACE_ORDER_SPINNER);
      if (component) component.destroy();
    }).unsubscribe();
  }
}