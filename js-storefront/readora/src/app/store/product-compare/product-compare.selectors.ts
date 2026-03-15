import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductCompareState } from './product-compare.state';

export const PRODUCT_COMPARE_FEATURE_KEY = 'productCompare';


export const selectProductCompareState = createFeatureSelector<ProductCompareState>(
  PRODUCT_COMPARE_FEATURE_KEY
);

export const selectProductCompare = createSelector(
  selectProductCompareState,
  (state) => state.products
);

export const selectCompareCount = createSelector(
  selectProductCompareState,
  (state) => state.count
);

export const selectCompareLoading = createSelector(
  selectProductCompareState,
  (state) => state.loading
);

export const selectCompareError = createSelector(
  selectProductCompareState,
  (state) => state.error
);