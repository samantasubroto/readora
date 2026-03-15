import { Injectable } from '@angular/core';
import { UserIdService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductCompareConnector } from '../../connectors';
import { ProductCompareList } from '../../model';

@Injectable({
  providedIn: 'root',
})
export class ProductCompareService {
  constructor(
    protected productCompareConnector: ProductCompareConnector,
    protected userIdService: UserIdService
  ) {}

  getCompareProducts(): Observable<ProductCompareList> {
    return this.userIdService.takeUserId(true).pipe(
      switchMap((userId) => this.productCompareConnector.getCompareProducts(userId))
    );
  }

  addProduct(productCode: string): Observable<ProductCompareList> {
    return this.userIdService.takeUserId(true).pipe(
      switchMap((userId) => this.productCompareConnector.addProduct(userId, productCode))
    );
  }

  removeProduct(productCode: string): Observable<ProductCompareList> {
    return this.userIdService.takeUserId(true).pipe(
      switchMap((userId) => this.productCompareConnector.removeProduct(userId, productCode))
    );
  }
}