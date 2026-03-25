import { Product } from '@spartacus/core';

export interface ProductCompareList {
  products: Product[];
  totalCount: number;
}

export interface RazorpayInitiateResponse {
  razorpayOrderId: string;
  amount: number;
  currency: string;
}

export interface RazorpayPaymentResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}