import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { RazorpayPaymentAdapter } from '../../../connectors';
import { RazorpayInitiateResponse } from '../../../model';

@Injectable({
  providedIn: 'root'
})
export class RazorpayPaymentOccAdapter implements RazorpayPaymentAdapter {

  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService
  ) {}

  initiatePayment(userId: string): Observable<RazorpayInitiateResponse> {
    const url = this.occEndpoints.buildUrl('initiatePayment', {
      urlParams: { userId }
    });
    return this.http.post<RazorpayInitiateResponse>(url, {});
  }
}