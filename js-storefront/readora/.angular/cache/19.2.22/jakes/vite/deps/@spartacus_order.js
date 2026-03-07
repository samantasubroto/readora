import {
  OrderOccModule
} from "./chunk-2NZ57JUN.js";
import {
  OrderComponentsModule,
  OrderCoreModule
} from "./chunk-FY2WLSPY.js";
import "./chunk-DS4EX6IV.js";
import "./chunk-YKRCIJUF.js";
import "./chunk-HH32UEAY.js";
import "./chunk-RSPFPDY4.js";
import "./chunk-RJPEYW3Q.js";
import "./chunk-PVKLIBZM.js";
import "./chunk-CFCLGR66.js";
import "./chunk-TKDNTTKU.js";
import "./chunk-HZV3DCGS.js";
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

// node_modules/@spartacus/order/fesm2022/spartacus-order.mjs
var OrderModule = class _OrderModule {
  static {
    this.ɵfac = function OrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderModule,
      imports: [OrderCoreModule, OrderOccModule, OrderComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [OrderCoreModule, OrderOccModule, OrderComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderModule, [{
    type: NgModule,
    args: [{
      imports: [OrderCoreModule, OrderOccModule, OrderComponentsModule]
    }]
  }], null, null);
})();
export {
  OrderModule
};
//# sourceMappingURL=@spartacus_order.js.map
