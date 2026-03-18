import { CheckoutConfig, CheckoutStepType, DeliveryModePreferences } from "@spartacus/checkout/base/root";

export const readoraCheckoutConfig: CheckoutConfig = {
  checkout: {
    steps: [
      // {
      //   id: 'poNumber',
      //   name: 'biocareCheckoutProgress.poNumber',
      //   routeName: 'checkoutPoNumber',
      //   type: [CheckoutStepType.PO_NUMBER],
      // },
      {
        id: 'reviewOrder',
        name: 'readoraCheckoutProgress.reviewOrder',
        routeName: 'checkoutReviewOrder',
        type: [CheckoutStepType.REVIEW_ORDER],
      },
    ],
    express: false,
    defaultDeliveryMode: [DeliveryModePreferences.FREE],
    guest: false,
  }
};