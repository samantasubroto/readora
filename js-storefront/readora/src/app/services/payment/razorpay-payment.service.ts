import { Injectable } from '@angular/core';
import { UserIdService } from '@spartacus/core';
import { Observable, switchMap } from 'rxjs';
import { RazorpayPaymentConnector } from '../../connectors';
import { RazorpayInitiateResponse, RazorpayPaymentResponse } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class RazorpayPaymentService {

  constructor(
    protected razorpayPaymentConnector: RazorpayPaymentConnector,
    protected userIdService: UserIdService
  ) {}

  initiatePayment(): Observable<RazorpayInitiateResponse> {
    return this.userIdService.takeUserId(true).pipe(
      switchMap((userId) => this.razorpayPaymentConnector.initiatePayment(userId))
    );
  }

  openCheckout(
    razorpayOrderId: string,
    amount: number,
    currency: string,
    customerName: string,
    customerEmail: string
  ): Observable<RazorpayPaymentResponse> {
    return new Observable((observer) => {
      const options = {
        key: 'rzp_test_xxxxxxxxxx',
        amount: amount * 100,
        currency: currency,
        order_id: razorpayOrderId,
        name: 'Readora',
        description: 'Order Payment',
        prefill: {
          name: customerName,
          email: customerEmail,
        },
        handler: (response: RazorpayPaymentResponse) => {
          observer.next(response);
          observer.complete();
        },
        modal: {
          ondismiss: () => {
            observer.error('Payment cancelled by user');
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    });
  }
}