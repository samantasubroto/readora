import {
  PersonalizationConfig
} from "./chunk-HZMFRI56.js";
import {
  CmsService,
  LoggerService
} from "./chunk-HZV3DCGS.js";
import "./chunk-TSY3UDII.js";
import "./chunk-CK3GQE66.js";
import "./chunk-H3D45PN7.js";
import "./chunk-EI6X5VM7.js";
import "./chunk-XJ7W2FYZ.js";
import "./chunk-MA6MY2PQ.js";
import {
  EMPTY,
  Injectable,
  NgModule,
  filter,
  inject,
  isDevMode,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-QWELERTA.js";
import "./chunk-K4KU7J5H.js";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization-core.mjs
var PersonalizationCoreModule = class _PersonalizationCoreModule {
  static {
    this.ɵfac = function PersonalizationCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalizationCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PersonalizationCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationCoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var PersonalizationContextService = class _PersonalizationContextService {
  constructor(config, cmsService) {
    this.config = config;
    this.cmsService = cmsService;
    this.logger = inject(LoggerService);
  }
  getPersonalizationContext() {
    if (!this.config.personalization?.context) {
      if (isDevMode()) {
        this.logger.warn(`There is no context configured in Personalization.`);
      }
      return EMPTY;
    } else {
      const context = this.config.personalization.context;
      return this.cmsService.getCurrentPage().pipe(filter(Boolean), map((page) => page.slots?.[context.slotPosition]), filter(Boolean), map((slot) => {
        const scriptComponent = slot.components?.find((i) => i.uid === context.componentId);
        return this.buildPersonalizationContext(scriptComponent?.properties?.script?.data);
      }));
    }
  }
  buildPersonalizationContext(data) {
    if (data) {
      const context = JSON.parse(atob(data));
      context.actions.forEach((action) => {
        Object.keys(action).forEach((key) => {
          action[key] = atob(action[key]);
        });
      });
      for (let i = 0; i < context.segments.length; i++) {
        context.segments[i] = atob(context.segments[i]);
      }
      return context;
    }
  }
  static {
    this.ɵfac = function PersonalizationContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalizationContextService)(ɵɵinject(PersonalizationConfig), ɵɵinject(CmsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PersonalizationContextService,
      factory: _PersonalizationContextService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PersonalizationConfig
  }, {
    type: CmsService
  }], null);
})();

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization.mjs
var PersonalizationModule = class _PersonalizationModule {
  static {
    this.ɵfac = function PersonalizationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalizationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PersonalizationModule,
      imports: [PersonalizationCoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [PersonalizationCoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationModule, [{
    type: NgModule,
    args: [{
      imports: [PersonalizationCoreModule]
    }]
  }], null, null);
})();
export {
  PersonalizationModule
};
//# sourceMappingURL=@spartacus_tracking_personalization.js.map
