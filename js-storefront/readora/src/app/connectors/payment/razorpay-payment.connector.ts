import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RazorpayPaymentAdapter } from './razorpay-payment.adapter';
import { RazorpayInitiateResponse } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class RazorpayPaymentConnector {

  constructor(
    protected adapter: RazorpayPaymentAdapter
  ) { }

  initiatePayment(userId: string, cartId: string): Observable<RazorpayInitiateResponse> {
    return this.adapter.initiatePayment(userId, cartId);
  }
}