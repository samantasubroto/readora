import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ProductCompareAdapter } from '../../../connectors';
import { ProductCompareList } from '../../../model';

@Injectable({
  providedIn: 'root',
})
export class ProductCompareOccAdapter implements ProductCompareAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService
  ) {}

  getCompareProducts(userId: string): Observable<ProductCompareList> {
    const url = this.occEndpoints.buildUrl('compareProducts', { urlParams: { userId } });
    return this.http.get<ProductCompareList>(url);
  }

  addProduct(userId: string, productCode: string): Observable<ProductCompareList> {
    const url = this.occEndpoints.buildUrl('addCompareProduct', { urlParams: { userId, productCode } });
    return this.http.post<ProductCompareList>(url, {});
  }

  removeProduct(userId: string, productCode: string): Observable<ProductCompareList> {
    const url = this.occEndpoints.buildUrl('removeCompareProduct', { urlParams: { userId, productCode } });
    return this.http.delete<ProductCompareList>(url);
  }
}