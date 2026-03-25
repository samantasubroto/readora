import { Observable } from 'rxjs';
import { RazorpayInitiateResponse } from '../../model';

export abstract class RazorpayPaymentAdapter {
  abstract initiatePayment(userId: string, cartId: string): Observable<RazorpayInitiateResponse>;
}