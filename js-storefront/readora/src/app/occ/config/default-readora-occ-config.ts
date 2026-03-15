import { OccConfig, ProductScope } from "@spartacus/core";

export const readoraOccConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        compareProducts:      'users/${userId}/productcompare',
        addCompareProduct:    'users/${userId}/productcompare/${code}',
        removeCompareProduct: 'users/${userId}/productcompare/${code}',
      }
    },
  }
};