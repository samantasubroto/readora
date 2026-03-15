import {OccEndpoint } from "@spartacus/core";

declare module '@spartacus/core' {
  interface OccEndpoints {
    compareProducts?: string | OccEndpoint;
    addCompareProduct?: string | OccEndpoint
    removeCompareProduct?: string | OccEndpoint;
  }
}
