import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductCompareActions from './product-compare.actions';
import { catchError, map, of, switchMap } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { ProductCompareService } from "../../services";

@Injectable()
export class ProductCompareEffects {

  private actions$ = inject(Actions);
  private productCompareService = inject(ProductCompareService);

  loadProductCompare$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductCompareActions.loadProductsCompare),

      switchMap(() =>
        this.productCompareService.getCompareProducts().pipe(
          map((data) => ProductCompareActions.loadProductsCompareSuccess({
            products: data.products,
            count: data.totalCount
          })),
          catchError((error) => of(ProductCompareActions.addProductCompareFailure({ error: error })))
        )
      )
    ))

  addProductCompare$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductCompareActions.addProductCompare),
      switchMap(({ code }) =>
        this.productCompareService.addProduct(code).pipe(
          map((data) => ProductCompareActions.addProductCompareSuccess({
            products: data.products,
            count: data.totalCount
          })),
          catchError((error) => of(ProductCompareActions.addProductCompareFailure({ error: error })))
        )
      )
    )
  )

  removeCompareProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductCompareActions.removeProductCompare),
      switchMap(({ code }) =>
        this.productCompareService.removeProduct(code).pipe(
          map((data) => ProductCompareActions.removeProductCompareSuccess({
            products: data.products,
            count: data.totalCount
          })),
          catchError((error) => of(ProductCompareActions.removeProductCompareFailure({ error })))
        )
      )
    )
  );
}