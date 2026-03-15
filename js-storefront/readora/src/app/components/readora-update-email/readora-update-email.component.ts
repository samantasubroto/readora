import { Component, OnInit } from '@angular/core';
import { AddressBookComponent, AddressBookComponentService, UpdateEmailComponent } from '@spartacus/user/profile/components';
import { ProductCompareService } from '../../services';
import { GlobalMessageService, Product, TranslationService } from '@spartacus/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductCompareActions from '../../store/product-compare';
import { selectCompareCount, selectCompareError, selectCompareLoading, selectProductCompare } from '../../store/product-compare';

@Component({
  selector: 'cx-readora-update-email',
  templateUrl: './readora-update-email.component.html',
  styleUrl: './readora-update-email.component.scss',
  standalone: false
})
export class ReadoraUpdateEmailComponent extends AddressBookComponent implements OnInit {
  products$ = this.store.select(selectProductCompare);
  loading$ = this.store.select(selectCompareLoading);
  error$ = this.store.select(selectCompareError);

  constructor(
    override service: AddressBookComponentService,
    override translation: TranslationService,
    override globalMessageService: GlobalMessageService,
    protected productCompareService: ProductCompareService,
    protected store: Store
  ) {
    super(service, translation, globalMessageService);
  }

  attributeKeys$: Observable<string[]> = this.products$.pipe(
    map((products) => {
      const keySet = new Set<string>();
      products.forEach((product) => {
        Object.keys(product).forEach((key) => keySet.add(key));
      });
      return Array.from(keySet);
    })
  );

  override ngOnInit(): void {
    this.store.dispatch(ProductCompareActions.loadProductsCompare());
  }

  getProductValue(product: Product, key: string): any {
    return (product as any)[key];
  }

  removeProduct(code: string): void {
    console.log(code);
    this.store.dispatch(ProductCompareActions.removeProductCompare({ code }));
  }
}
