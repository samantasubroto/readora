import {
  provideDefaultConfigFactory
} from "./chunk-HZV3DCGS.js";
import "./chunk-TSY3UDII.js";
import "./chunk-CK3GQE66.js";
import "./chunk-H3D45PN7.js";
import "./chunk-EI6X5VM7.js";
import "./chunk-XJ7W2FYZ.js";
import "./chunk-MA6MY2PQ.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-QWELERTA.js";
import "./chunk-K4KU7J5H.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-bulk-pricing-root.mjs
var PRODUCT_BULK_PRICING_FEATURE = "productBulkPricing";
function defaultProductBulkPricingComponentsConfig() {
  const config = {
    featureModules: {
      [PRODUCT_BULK_PRICING_FEATURE]: {
        cmsComponents: ["BulkPricingTableComponent"]
      }
    }
  };
  return config;
}
var BulkPricingRootModule = class _BulkPricingRootModule {
  static {
    this.ɵfac = function BulkPricingRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkPricingRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BulkPricingRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultProductBulkPricingComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkPricingRootModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [provideDefaultConfigFactory(defaultProductBulkPricingComponentsConfig)]
    }]
  }], null, null);
})();
export {
  BulkPricingRootModule,
  PRODUCT_BULK_PRICING_FEATURE,
  defaultProductBulkPricingComponentsConfig
};
//# sourceMappingURL=@spartacus_product_bulk-pricing_root.js.map
