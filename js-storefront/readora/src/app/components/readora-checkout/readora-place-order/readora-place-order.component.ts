import { ChangeDetectionStrategy, Component, ComponentRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { RoutingService, User } from '@spartacus/core';
import { OrderFacade } from '@spartacus/order/root';
import { LaunchDialogService, LAUNCH_CALLER } from '@spartacus/storefront';
import { filter, switchMap } from 'rxjs/operators';
import { CheckoutPlaceOrderComponent } from '@spartacus/checkout/base/components';
import { RazorpayPaymentService } from '../../../services';
import { RazorpayPaymentResponse } from '../../../model';
import { UserAccountFacade } from '@spartacus/user/account/root';

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
  ) {
    super(orderFacade, routingService, fb, launchDialogService, vcr);
  }

  override submitForm(): void {
    if (this.checkoutSubmitForm.valid) {

      this.placedOrder = this.launchDialogService.launch(
        LAUNCH_CALLER.PLACE_ORDER_SPINNER,
        this.vcr
      );

      // Step 1 — initiate Razorpay payment
      this.razorpayPaymentService.initiatePayment().pipe(

        // Step 2 — open Razorpay widget
        switchMap((initiateResponse) =>
          this.userAccountFacade.get().pipe(
            filter((user): user is User => !!user),
            switchMap((user : User) =>
              this.razorpayPaymentService.openCheckout(
                initiateResponse.razorpayOrderId,
                initiateResponse.amount,
                initiateResponse.currency,
                user?.name ?? '',
                user?.uid ?? ''
              )
            )
          )
        ),

        // Step 3 — payment done, place SAP order
        switchMap((_paymentResponse: RazorpayPaymentResponse) =>
          this.orderFacade.placeOrder(this.checkoutSubmitForm.valid)
        )

      ).subscribe({
        next: () => this.onSuccess(),
        error: (err) => {
          console.error('Payment failed:', err);
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