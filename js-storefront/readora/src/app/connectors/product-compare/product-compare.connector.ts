import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCompareAdapter } from './product-compare.adapter';
import { ProductCompareList } from '../../model';


@Injectable({
  providedIn: 'root',
})
export class ProductCompareConnector {
  constructor(protected adapter: ProductCompareAdapter) {}

  getCompareProducts(userId: string): Observable<ProductCompareList> {
    return this.adapter.getCompareProducts(userId);
  }

  addProduct(userId: string, productCode: string): Observable<ProductCompareList> {
    return this.adapter.addProduct(userId, productCode);
  }

  removeProduct(userId: string, productCode: string): Observable<ProductCompareList> {
    return this.adapter.removeProduct(userId, productCode);
  }
}