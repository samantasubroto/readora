import { createAction, props } from "@ngrx/store";
import { Product } from "@spartacus/core";

export const loadProductsCompare = createAction(
  '[ProductCompare] Load'
)

export const loadProductsCompareSuccess = createAction(
  '[ProductCompare] Load Success',
  props<{ products: Product[]; count: number }>()
)

export const loadProductsCompareFailure = createAction(
  '[ProductCompare] Load Failure',
  props<{ error: any }>()
)

export const addProductCompare = createAction(
  '[ProductCompare] add',
  props<{ code: string }>()
)

export const addProductCompareSuccess = createAction(
  '[ProductCompare] add Success',
  props<{ products: Product[]; count: number }>()
)

export const addProductCompareFailure = createAction(
  '[ProductCompare] add Failure',
  props<{ error: any }>()
)

export const removeProductCompare = createAction(
  '[ProductCompare] remove',
  props<{ code: string }>()
)

export const removeProductCompareSuccess = createAction(
  '[ProductCompare] remove Success',
  props<{ products: Product[], count: number }>()
)

export const removeProductCompareFailure = createAction(
  '[ProductCompare] remove Success',
  props<{ error: any }>()
)