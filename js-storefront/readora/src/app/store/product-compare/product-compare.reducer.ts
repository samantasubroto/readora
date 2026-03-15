import { createReducer, on } from '@ngrx/store';
import { initialState } from './product-compare.state';
import * as ProductCompareActions from './product-compare.actions';

export const productCompareReducer = createReducer(
  initialState,

  on(ProductCompareActions.loadProductsCompare, (state) => ({
    ...state, loading: true, error: null
  })),
  on(ProductCompareActions.loadProductsCompareSuccess, (state, { products, count }) => ({
    ...state, products, count, loading: false, loaded: true, error: null
  })),
  on(ProductCompareActions.loadProductsCompareFailure, (state, { error }) => ({
    ...state, loading: false, loaded: false, error
  })),

  on(ProductCompareActions.addProductCompare, (state) => ({
    ...state, loading: true, error: null
  })),
  on(ProductCompareActions.addProductCompareSuccess, (state, { products, count }) => ({
    ...state, products, count, loading: false, loaded: true, error: null
  })),
  on(ProductCompareActions.addProductCompareFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(ProductCompareActions.removeProductCompare, (state) => ({
    ...state, loading: true, error: null
  })),
  on(ProductCompareActions.removeProductCompareSuccess, (state, { products, count }) => ({
    ...state, products, count, loading: false, loaded: true, error: null
  })),
  on(ProductCompareActions.removeProductCompareFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),
);