import { Product } from "@spartacus/core";

export interface ProductCompareState {
  products: Product[];
  count: number;
  loading: boolean;
  error: any;
}

export const initialState: ProductCompareState = {
  products: [],
  count: 0,
  loading: false,
  error: null
};
