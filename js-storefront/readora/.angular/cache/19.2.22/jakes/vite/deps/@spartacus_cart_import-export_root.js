import {
  provideDefaultConfig
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

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export-root.mjs
var CART_IMPORT_EXPORT_FEATURE = "cartImportExport";
var ImportExportRootModule = class _ImportExportRootModule {
  static {
    this.ɵfac = function ImportExportRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportExportRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ImportExportRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        featureModules: {
          [CART_IMPORT_EXPORT_FEATURE]: {
            cmsComponents: ["ImportExportOrderEntriesComponent", "ImportOrderEntriesComponent", "ExportOrderEntriesComponent"]
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig({
        featureModules: {
          [CART_IMPORT_EXPORT_FEATURE]: {
            cmsComponents: ["ImportExportOrderEntriesComponent", "ImportOrderEntriesComponent", "ExportOrderEntriesComponent"]
          }
        }
      })]
    }]
  }], null, null);
})();
export {
  CART_IMPORT_EXPORT_FEATURE,
  ImportExportRootModule
};
//# sourceMappingURL=@spartacus_cart_import-export_root.js.map
