import {
  CheckoutSupportedDeliveryModesQueryReloadEvent
} from "./chunk-GP2425W2.js";
import {
  PDFInvoicesComponentsModule
} from "./chunk-DS4EX6IV.js";
import "./chunk-YKRCIJUF.js";
import "./chunk-GEWQ5LEW.js";
import {
  CartItemContext,
  CartOutlets
} from "./chunk-CFCLGR66.js";
import {
  CardComponent,
  CardModule,
  DatePickerComponent,
  DatePickerModule,
  FormControl,
  FormGroup,
  FormGroupDirective,
  IconModule,
  NgControlStatusGroup,
  OutletContextData,
  OutletPosition,
  ReactiveFormsModule,
  provideOutlet,
  ɵNgNoValidate
} from "./chunk-TKDNTTKU.js";
import {
  CxDatePipe,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  TranslatePipe,
  TranslationService,
  UrlModule,
  facadeFactory,
  provideDefaultConfigFactory
} from "./chunk-HZV3DCGS.js";
import "./chunk-TSY3UDII.js";
import "./chunk-CK3GQE66.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-H3D45PN7.js";
import "./chunk-EI6X5VM7.js";
import "./chunk-XJ7W2FYZ.js";
import "./chunk-MA6MY2PQ.js";
import {
  Component,
  EMPTY,
  Injectable,
  NgModule,
  Optional,
  Subscription,
  filter,
  map,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QWELERTA.js";
import "./chunk-K4KU7J5H.js";

// node_modules/@spartacus/requested-delivery-date/fesm2022/spartacus-requested-delivery-date-root.mjs
function DeliveryModeDatePickerComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 3);
    ɵɵpipe(2, "cxDate");
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(3, 3, ctx_r0.getRequestedDeliveryDateCardContent(ɵɵpipeBind1(2, 1, ctx_r0.requestedRetrievalAt))));
  }
}
function DeliveryModeDatePickerComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "form", 5)(2, "label", 6)(3, "div", 7);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 8)(7, "cx-date-picker", 9);
    ɵɵlistener("update", function DeliveryModeDatePickerComponent_ng_container_0_ng_template_2_Template_cx_date_picker_update_7_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.setRequestedDeliveryDate());
    });
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r0.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "requestedDeliveryDate.datePickerLabel"), " ");
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r0.form.get("requestDeliveryDate"))("min", ctx_r0.earliestRetrievalAt)("required", true);
  }
}
function DeliveryModeDatePickerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DeliveryModeDatePickerComponent_ng_container_0_ng_container_1_Template, 4, 5, "ng-container", 2)(2, DeliveryModeDatePickerComponent_ng_container_0_ng_template_2_Template, 8, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const datePickerEnabled_r3 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isDatePickerReadOnly)("ngIfElse", datePickerEnabled_r3);
  }
}
function OrderOverviewDeliveryDateComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 1);
    ɵɵpipe(2, "cxDate");
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(3, 3, ctx_r0.getRequestedDeliveryDateCardContent(ɵɵpipeBind1(2, 1, ctx_r0.order == null ? null : ctx_r0.order.requestedRetrievalAt))));
  }
}
var REQUESTED_DELIVERY_DATE_FEATURE = "requestedDeliveryDate";
var REQUESTED_DELIVERY_DATE_CORE_FEATURE = "requestedDeliveryDateCore";
function requestedDeliveryDateFacadeFactory() {
  return facadeFactory({
    facade: RequestedDeliveryDateFacade,
    feature: REQUESTED_DELIVERY_DATE_FEATURE,
    methods: ["setRequestedDeliveryDate"]
  });
}
var RequestedDeliveryDateFacade = class _RequestedDeliveryDateFacade {
  static {
    this.ɵfac = function RequestedDeliveryDateFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RequestedDeliveryDateFacade,
      factory: () => requestedDeliveryDateFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: requestedDeliveryDateFacadeFactory
    }]
  }], null, null);
})();
var DateValidationService = class _DateValidationService {
  /**
   * Validates if the string is containing a date string.
   * @param value Date string in the format 'dd-mm-yyy'
   * @returns true if valid, false if invalid
   */
  isDateStringValid(value) {
    return value != null && value !== void 0 && value.length > 0 && !isNaN(
      this.getDateFromDateString(value).getDate()
      //convert 'dd-mm-yyyy' into 'mm/dd/yyyy'
    );
  }
  /**
   * Returns a Date object from a date string in the format 'dd-mm-yyy'
   * @param value Date string in the format 'dd-mm-yyy'
   */
  getDateFromDateString(value) {
    return new Date(value.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
  }
  /**
   * Checks if the source date is greater than or equal to the target
   * @param source Date string in the format 'dd-mm-yyy'
   * @param target Date string in the format 'dd-mm-yyy'
   * @returns true if `source` date is greater than or equal to `target` date
   */
  isDateGreaterOrEqual(source, target) {
    if (source.length === 0 || target.length === 0) {
      return false;
    }
    const d1 = this.getDateFromDateString(source);
    const d2 = this.getDateFromDateString(target);
    return d1 < d2 ? false : true;
  }
  static {
    this.ɵfac = function DateValidationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateValidationService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DateValidationService,
      factory: _DateValidationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateValidationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DeliveryModeDatePickerComponent = class _DeliveryModeDatePickerComponent {
  constructor(datePipe, requestedDelDateFacade, dateValidationService, eventService, translation, globalMessageService, deliveryOutlet) {
    this.datePipe = datePipe;
    this.requestedDelDateFacade = requestedDelDateFacade;
    this.dateValidationService = dateValidationService;
    this.eventService = eventService;
    this.translation = translation;
    this.globalMessageService = globalMessageService;
    this.deliveryOutlet = deliveryOutlet;
    this.cartEntry = {};
    this.subscription = new Subscription();
    this.form = new FormGroup({
      requestDeliveryDate: new FormControl()
    });
    this.isDatePickerReadOnly = true;
  }
  ngOnInit() {
    if (this.deliveryOutlet?.context$) {
      this.subscription.add(this.deliveryOutlet.context$.subscribe((context) => {
        this.cartEntry = context?.item;
        this.isDatePickerReadOnly = context?.readonly || false;
      }));
    }
    if (this.isEarliestRetrievalDatePresent()) {
      this.earliestRetrievalAt = this.cartEntry.earliestRetrievalAt;
    }
    if (this.isRequestedDeliveryDatePresent()) {
      this.requestedRetrievalAt = this.cartEntry.requestedRetrievalAt;
    } else {
      this.requestedRetrievalAt = this.earliestRetrievalAt;
      this.form.patchValue({
        requestDeliveryDate: this.requestedRetrievalAt
      });
      this.setRequestedDeliveryDate();
    }
    this.form.patchValue({
      requestDeliveryDate: this.requestedRetrievalAt
    });
  }
  isEarliestRetrievalDatePresent() {
    return this.dateValidationService.isDateStringValid(this.cartEntry?.earliestRetrievalAt);
  }
  isRequestedDeliveryDatePresent() {
    return this.dateValidationService.isDateStringValid(this.cartEntry?.requestedRetrievalAt);
  }
  getRequestedDeliveryDateCardContent(isoDate) {
    return this.translation.translate("requestedDeliveryDate.readOnlyTextLabel").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        text: [textTitle, isoDate]
      };
    }));
  }
  setRequestedDeliveryDate() {
    const userId = this.cartEntry?.user?.uid || "";
    const cartId = this.cartEntry?.code || "";
    const requestedDate = this.form?.get("requestDeliveryDate")?.value || "";
    if (userId.length === 0 || cartId.length === 0 || requestedDate.length === 0 || !this.dateValidationService.isDateStringValid(requestedDate) || !this.dateValidationService.isDateGreaterOrEqual(requestedDate, this.earliestRetrievalAt || "")) {
      return;
    }
    this.subscription.add(this.requestedDelDateFacade.setRequestedDeliveryDate(userId, cartId, requestedDate).subscribe({
      next: () => {
        this.eventService.dispatch({}, CheckoutSupportedDeliveryModesQueryReloadEvent);
        this.globalMessageService.add({
          key: "requestedDeliveryDate.successMessage"
        }, GlobalMessageType.MSG_TYPE_INFO);
      },
      error: (error) => {
        if (error && this.getErrors(error)?.length) {
          this.globalMessageService.add({
            key: "requestedDeliveryDate.errorMessage"
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
      }
    }));
  }
  getErrors(response) {
    return (response.error?.errors ?? []).filter((error) => error?.type === "UnknownResourceError");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function DeliveryModeDatePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryModeDatePickerComponent)(ɵɵdirectiveInject(CxDatePipe), ɵɵdirectiveInject(RequestedDeliveryDateFacade), ɵɵdirectiveInject(DateValidationService), ɵɵdirectiveInject(EventService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DeliveryModeDatePickerComponent,
      selectors: [["cx-request-delivery-date"]],
      standalone: false,
      features: [ɵɵProvidersFeature([CxDatePipe])],
      decls: 1,
      vars: 1,
      consts: [["datePickerEnabled", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "content"], [1, "form-check"], [3, "formGroup"], [1, "row"], [1, "pl-4", "col-8"], [1, "col-4"], [3, "update", "control", "min", "required"]],
      template: function DeliveryModeDatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DeliveryModeDatePickerComponent_ng_container_0_Template, 4, 2, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.isEarliestRetrievalDatePresent());
        }
      },
      dependencies: [NgIf, DatePickerComponent, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, CardComponent, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryModeDatePickerComponent, [{
    type: Component,
    args: [{
      selector: "cx-request-delivery-date",
      providers: [CxDatePipe],
      standalone: false,
      template: `<ng-container *ngIf="isEarliestRetrievalDatePresent()">
  <ng-container *ngIf="isDatePickerReadOnly; else datePickerEnabled">
    <cx-card
      [content]="
        getRequestedDeliveryDateCardContent(requestedRetrievalAt | cxDate)
          | async
      "
    ></cx-card>
  </ng-container>
  <ng-template #datePickerEnabled>
    <div class="form-check">
      <form [formGroup]="form">
        <label class="row">
          <div class="pl-4 col-8">
            {{ 'requestedDeliveryDate.datePickerLabel' | cxTranslate }}
          </div>
          <div class="col-4">
            <cx-date-picker
              [control]="$any(form.get('requestDeliveryDate'))"
              [min]="earliestRetrievalAt"
              [required]="true"
              (update)="setRequestedDeliveryDate()"
            >
            </cx-date-picker>
          </div>
        </label>
      </form>
    </div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: CxDatePipe
  }, {
    type: RequestedDeliveryDateFacade
  }, {
    type: DateValidationService
  }, {
    type: EventService
  }, {
    type: TranslationService
  }, {
    type: GlobalMessageService
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var OrderOverviewDeliveryDateComponent = class _OrderOverviewDeliveryDateComponent {
  constructor(dateValidationService, translation, orderOutlet) {
    this.dateValidationService = dateValidationService;
    this.translation = translation;
    this.orderOutlet = orderOutlet;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    if (this.orderOutlet?.context$) {
      this.subscription.add(this.orderOutlet.context$.subscribe((context) => this.order = context?.item));
    }
  }
  isRequestedDeliveryDatePresent() {
    return this.dateValidationService.isDateStringValid(this.order?.requestedRetrievalAt);
  }
  getRequestedDeliveryDateCardContent(isoDate) {
    return this.translation.translate("requestedDeliveryDate.readOnlyTextLabel").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function OrderOverviewDeliveryDateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderOverviewDeliveryDateComponent)(ɵɵdirectiveInject(DateValidationService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderOverviewDeliveryDateComponent,
      selectors: [["cx-order-overview-delivery-date"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "content"]],
      template: function OrderOverviewDeliveryDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderOverviewDeliveryDateComponent_ng_container_0_Template, 4, 5, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.order && ctx.isRequestedDeliveryDatePresent());
        }
      },
      dependencies: [NgIf, CardComponent, AsyncPipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderOverviewDeliveryDateComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-overview-delivery-date",
      standalone: false,
      template: '<ng-container *ngIf="order && isRequestedDeliveryDatePresent()">\n  <cx-card\n    [content]="\n      getRequestedDeliveryDateCardContent(order?.requestedRetrievalAt | cxDate)\n        | async\n    "\n  ></cx-card>\n</ng-container>\n'
    }]
  }], () => [{
    type: DateValidationService
  }, {
    type: TranslationService
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var RequestedDeliveryDateComponentsModule = class _RequestedDeliveryDateComponentsModule {
  static {
    this.ɵfac = function RequestedDeliveryDateComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RequestedDeliveryDateComponentsModule,
      declarations: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent],
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, CardModule],
      exports: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, CardModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, CardModule],
      declarations: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent],
      exports: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent]
    }]
  }], null, null);
})();
function defaultRequestedDeliveryDateComponentsConfig() {
  const config = {
    featureModules: {
      [REQUESTED_DELIVERY_DATE_FEATURE]: {
        cmsComponents: ["DeliveryModeDatePickerComponent", "OrderOverviewDeliveryDateComponent"]
      },
      // by default core is bundled together with components
      [REQUESTED_DELIVERY_DATE_CORE_FEATURE]: REQUESTED_DELIVERY_DATE_FEATURE
    }
  };
  return config;
}
var RequestedDeliveryDateRootModule = class _RequestedDeliveryDateRootModule {
  static {
    this.ɵfac = function RequestedDeliveryDateRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RequestedDeliveryDateRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.DELIVERY_MODE,
        position: OutletPosition.AFTER,
        component: DeliveryModeDatePickerComponent
      }), provideOutlet({
        id: CartOutlets.ORDER_OVERVIEW,
        position: OutletPosition.AFTER,
        component: OrderOverviewDeliveryDateComponent
      }), provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideOutlet({
        id: CartOutlets.DELIVERY_MODE,
        position: OutletPosition.AFTER,
        component: DeliveryModeDatePickerComponent
      }), provideOutlet({
        id: CartOutlets.ORDER_OVERVIEW,
        position: OutletPosition.AFTER,
        component: OrderOverviewDeliveryDateComponent
      }), provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/s4om/fesm2022/spartacus-s4om-root.mjs
var _c0 = (a0, a1) => ({
  quantity: a0,
  date: a1
});
function ScheduleLinesComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "cxDate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 6);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 5);
    ɵɵtext(11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const scheduleLine_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("aria-describedby", ctx_r2.getScheduleLineInfoId(i_r2));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.getScheduleLineInfoId(i_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 6, "s4omScheduleLines.a11y.scheduleLineEntryInfo", ɵɵpureFunction2(14, _c0, scheduleLine_r1.confirmedQuantity, ctx_r2.getLongDate(scheduleLine_r1.confirmedAt))), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 9, scheduleLine_r1 == null ? null : scheduleLine_r1.confirmedAt, "M/d/yyyy"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 12, "s4omScheduleLines.quantity"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", scheduleLine_r1 == null ? null : scheduleLine_r1.confirmedQuantity, " ");
  }
}
function ScheduleLinesComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtemplate(2, ScheduleLinesComponent_ng_container_0_ng_container_1_div_2_Template, 12, 17, "div", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", orderEntry_r4.scheduleLines);
  }
}
function ScheduleLinesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ScheduleLinesComponent_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasScheduleLines(orderEntry_r4));
  }
}
var ScheduleLinesComponent = class _ScheduleLinesComponent {
  constructor(cartItemContext, translationService, datePipe) {
    this.cartItemContext = cartItemContext;
    this.translationService = translationService;
    this.datePipe = datePipe;
    this.orderEntry$ = this.cartItemContext?.item$ ?? EMPTY;
  }
  /**
   * Verifies whether the Schedule Line infos have any entries.
   * Only in this case we want to display the schedule line summary
   *
   * @param {OrderEntry} item - Cart item
   * @returns {boolean} - whether the Schedule Line information is present for the order
   */
  hasScheduleLines(item) {
    const scheduleLines = item.scheduleLines;
    return scheduleLines != null && scheduleLines.length > 0;
  }
  getScheduleLineInfoId(index) {
    return "cx-schedule-line-info-" + index.toString();
  }
  getLongDate(date) {
    if (!date) {
      return "";
    }
    return this.datePipe.transform(date);
  }
  static {
    this.ɵfac = function ScheduleLinesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleLinesComponent)(ɵɵdirectiveInject(CartItemContext, 8), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CxDatePipe));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ScheduleLinesComponent,
      selectors: [["cx-schedule-lines"]],
      standalone: false,
      features: [ɵɵProvidersFeature([CxDatePipe])],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-code"], ["class", "cx-schedule-line-info", 4, "ngFor", "ngForOf"], [1, "cx-schedule-line-info"], [1, "cx-visually-hidden", 3, "id"], ["aria-hidden", "true", 1, "cx-value"], ["aria-hidden", "true", 1, "cx-label"]],
      template: function ScheduleLinesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ScheduleLinesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderEntry$));
        }
      },
      dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleLinesComponent, [{
    type: Component,
    args: [{
      selector: "cx-schedule-lines",
      providers: [CxDatePipe],
      standalone: false,
      template: `<ng-container *ngIf="orderEntry$ | async as orderEntry">
  <ng-container *ngIf="hasScheduleLines(orderEntry)">
    <div class="cx-code">
      <div
        *ngFor="let scheduleLine of orderEntry.scheduleLines; let i = index"
        class="cx-schedule-line-info"
        attr.aria-describedby="{{ getScheduleLineInfoId(i) }}"
      >
        <div id="{{ getScheduleLineInfoId(i) }}" class="cx-visually-hidden">
          {{
            's4omScheduleLines.a11y.scheduleLineEntryInfo'
              | cxTranslate
                : {
                    quantity: scheduleLine.confirmedQuantity,
                    date: getLongDate(scheduleLine.confirmedAt),
                  }
          }}
        </div>
        <div class="cx-value" aria-hidden="true">
          {{ scheduleLine?.confirmedAt | cxDate: 'M/d/yyyy' }}
        </div>
        <div class="cx-label" aria-hidden="true">
          {{ 's4omScheduleLines.quantity' | cxTranslate }}
        </div>
        <div class="cx-value" aria-hidden="true">
          {{ scheduleLine?.confirmedQuantity }}
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: CartItemContext,
    decorators: [{
      type: Optional
    }]
  }, {
    type: TranslationService
  }, {
    type: CxDatePipe
  }], null);
})();
var ScheduleLinesModule = class _ScheduleLinesModule {
  static {
    this.ɵfac = function ScheduleLinesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleLinesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ScheduleLinesModule,
      declarations: [ScheduleLinesComponent],
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      exports: [ScheduleLinesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, UrlModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleLinesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      declarations: [ScheduleLinesComponent],
      exports: [ScheduleLinesComponent]
    }]
  }], null, null);
})();
var S4OM_FEATURE = "S4HANA-Order-Management";
var S4omRootModule = class _S4omRootModule {
  static {
    this.ɵfac = function S4omRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4omRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4omRootModule,
      imports: [
        ScheduleLinesModule,
        RequestedDeliveryDateComponentsModule,
        //Adding dependency with Requested Delivery Date so that the library gets installed along with S4OM
        PDFInvoicesComponentsModule
      ]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ScheduleLinesComponent
      })],
      imports: [
        ScheduleLinesModule,
        RequestedDeliveryDateComponentsModule,
        //Adding dependency with Requested Delivery Date so that the library gets installed along with S4OM
        PDFInvoicesComponentsModule
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4omRootModule, [{
    type: NgModule,
    args: [{
      imports: [
        ScheduleLinesModule,
        RequestedDeliveryDateComponentsModule,
        //Adding dependency with Requested Delivery Date so that the library gets installed along with S4OM
        PDFInvoicesComponentsModule
        //Adding dependency with PDF Invoices so that the library gets installed along with S4OM
      ],
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ScheduleLinesComponent
      })]
    }]
  }], null, null);
})();
export {
  S4OM_FEATURE,
  S4omRootModule,
  ScheduleLinesComponent,
  ScheduleLinesModule
};
//# sourceMappingURL=@spartacus_s4om_root.js.map
