import {
  LAUNCH_CALLER
} from "./chunk-TKDNTTKU.js";
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

// node_modules/@spartacus/product/fesm2022/spartacus-product-image-zoom-root.mjs
var PRODUCT_IMAGE_ZOOM_FEATURE = "productImageZoom";
LAUNCH_CALLER["PRODUCT_IMAGE_ZOOM"] = "PRODUCT_IMAGE_ZOOM";
function defaultImageZoomComponentsConfig() {
  const config = {
    featureModules: {
      [PRODUCT_IMAGE_ZOOM_FEATURE]: {
        cmsComponents: ["ProductImagesComponent"]
      }
    }
  };
  return config;
}
var ProductImageZoomRootModule = class _ProductImageZoomRootModule {
  static {
    this.ɵfac = function ProductImageZoomRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductImageZoomRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultImageZoomComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomRootModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [provideDefaultConfigFactory(defaultImageZoomComponentsConfig)]
    }]
  }], null, null);
})();
export {
  PRODUCT_IMAGE_ZOOM_FEATURE,
  ProductImageZoomRootModule,
  defaultImageZoomComponentsConfig
};
//# sourceMappingURL=@spartacus_product_image-zoom_root.js.map
