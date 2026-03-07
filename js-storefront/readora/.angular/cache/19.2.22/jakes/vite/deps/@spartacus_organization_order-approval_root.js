import {
  ORDER_FEATURE
} from "./chunk-YKRCIJUF.js";
import "./chunk-CFCLGR66.js";
import {
  CmsPageGuard,
  PageLayoutComponent
} from "./chunk-TKDNTTKU.js";
import {
  AuthGuard,
  RouterModule,
  provideDefaultConfig,
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

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-order-approval-root.mjs
var ORGANIZATION_ORDER_APPROVAL_FEATURE = "organizationOrderApproval";
function defaultOrganizationOrderApprovalComponentsConfig() {
  const config = {
    featureModules: {
      [ORGANIZATION_ORDER_APPROVAL_FEATURE]: {
        cmsComponents: ["OrderApprovalListComponent", "OrderApprovalDetailTotalsComponent", "OrderApprovalDetailApprovalDetailsComponent", "OrderApprovalDetailShippingComponent", "OrderApprovalDetailItemsComponent", "OrderApprovalDetailFormComponent", "AccountOrderDetailsApprovalDetailsComponent"],
        dependencies: [ORDER_FEATURE]
      }
    }
  };
  return config;
}
var OrderApprovalRootModule = class _OrderApprovalRootModule {
  static {
    this.ɵfac = function OrderApprovalRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalRootModule,
      imports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOrganizationOrderApprovalComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            orderApprovals: {
              paths: ["my-account/approval-dashboard"]
            },
            orderApprovalDetails: {
              paths: ["my-account/approval/:approvalCode"]
            }
          }
        }
      })],
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderApprovalDetails"
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderApprovalDetails"
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultOrganizationOrderApprovalComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            orderApprovals: {
              paths: ["my-account/approval-dashboard"]
            },
            orderApprovalDetails: {
              paths: ["my-account/approval/:approvalCode"]
            }
          }
        }
      })]
    }]
  }], null, null);
})();
export {
  ORGANIZATION_ORDER_APPROVAL_FEATURE,
  OrderApprovalRootModule,
  defaultOrganizationOrderApprovalComponentsConfig
};
//# sourceMappingURL=@spartacus_organization_order-approval_root.js.map
