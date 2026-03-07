import {
  CheckoutComponentsModule
} from "./chunk-GPF5VL6U.js";
import "./chunk-3SJFCA7U.js";
import {
  CheckoutBillingAddressFacade,
  CheckoutDeliveryAddressClearedEvent,
  CheckoutDeliveryAddressCreatedEvent,
  CheckoutDeliveryAddressFacade,
  CheckoutDeliveryAddressSetEvent,
  CheckoutDeliveryModeClearedErrorEvent,
  CheckoutDeliveryModeClearedEvent,
  CheckoutDeliveryModeSetEvent,
  CheckoutDeliveryModesFacade,
  CheckoutPaymentCardTypesQueryReloadEvent,
  CheckoutPaymentCardTypesQueryResetEvent,
  CheckoutPaymentDetailsCreatedEvent,
  CheckoutPaymentDetailsSetEvent,
  CheckoutPaymentFacade,
  CheckoutQueryFacade,
  CheckoutQueryReloadEvent,
  CheckoutQueryResetEvent,
  CheckoutSupportedDeliveryModesQueryReloadEvent,
  CheckoutSupportedDeliveryModesQueryResetEvent
} from "./chunk-GP2425W2.js";
import "./chunk-YKRCIJUF.js";
import "./chunk-RSPFPDY4.js";
import "./chunk-RJPEYW3Q.js";
import "./chunk-GEWQ5LEW.js";
import "./chunk-WCOE5NPD.js";
import {
  ActiveCartFacade
} from "./chunk-CFCLGR66.js";
import "./chunk-TKDNTTKU.js";
import {
  ADDRESS_NORMALIZER,
  ADDRESS_SERIALIZER,
  BasePageMetaResolver,
  CommandService,
  CommandStrategy,
  ConverterService,
  EventService,
  HttpParamsURIEncoder,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  PAYMENT_DETAILS_NORMALIZER,
  PageMetaResolver,
  PageType,
  QueryService,
  TranslationService,
  UserIdService,
  backOff,
  isJaloError,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-HZV3DCGS.js";
import "./chunk-TSY3UDII.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-CK3GQE66.js";
import {
  CommonModule
} from "./chunk-H3D45PN7.js";
import "./chunk-EI6X5VM7.js";
import "./chunk-XJ7W2FYZ.js";
import "./chunk-MA6MY2PQ.js";
import {
  Injectable,
  InjectionToken,
  NgModule,
  catchError,
  combineLatest,
  filter,
  inject,
  map,
  mergeMap,
  setClassMetadata,
  switchMap,
  take,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-QWELERTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-K4KU7J5H.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-core.mjs
var CheckoutBillingAddressAdapter = class {
};
var CheckoutBillingAddressConnector = class _CheckoutBillingAddressConnector {
  constructor() {
    this.adapter = inject(CheckoutBillingAddressAdapter);
  }
  setBillingAddress(userId, cartId, address) {
    return this.adapter.setBillingAddress(userId, cartId, address);
  }
  static {
    this.ɵfac = function CheckoutBillingAddressConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutBillingAddressConnector)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutBillingAddressConnector,
      factory: _CheckoutBillingAddressConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutBillingAddressConnector, [{
    type: Injectable
  }], null, null);
})();
var CheckoutDeliveryAddressAdapter = class {
};
var CheckoutDeliveryAddressConnector = class _CheckoutDeliveryAddressConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  createAddress(userId, cartId, address) {
    return this.adapter.createAddress(userId, cartId, address);
  }
  setAddress(userId, cartId, addressId) {
    return this.adapter.setAddress(userId, cartId, addressId);
  }
  clearCheckoutDeliveryAddress(userId, cartId) {
    return this.adapter.clearCheckoutDeliveryAddress(userId, cartId);
  }
  static {
    this.ɵfac = function CheckoutDeliveryAddressConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryAddressConnector)(ɵɵinject(CheckoutDeliveryAddressAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryAddressConnector,
      factory: _CheckoutDeliveryAddressConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutDeliveryAddressAdapter
  }], null);
})();
var CheckoutDeliveryModesAdapter = class {
};
var CheckoutDeliveryModesConnector = class _CheckoutDeliveryModesConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  setMode(userId, cartId, deliveryModeId) {
    return this.adapter.setMode(userId, cartId, deliveryModeId);
  }
  getSupportedModes(userId, cartId) {
    return this.adapter.getSupportedModes(userId, cartId);
  }
  clearCheckoutDeliveryMode(userId, cartId) {
    return this.adapter.clearCheckoutDeliveryMode(userId, cartId);
  }
  static {
    this.ɵfac = function CheckoutDeliveryModesConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryModesConnector)(ɵɵinject(CheckoutDeliveryModesAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryModesConnector,
      factory: _CheckoutDeliveryModesConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModesConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutDeliveryModesAdapter
  }], null);
})();
var CheckoutPaymentAdapter = class {
};
var CheckoutPaymentConnector = class _CheckoutPaymentConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  createPaymentDetails(userId, cartId, paymentDetails) {
    return this.adapter.createPaymentDetails(userId, cartId, paymentDetails);
  }
  setPaymentDetails(userId, cartId, paymentDetailsId) {
    return this.adapter.setPaymentDetails(userId, cartId, paymentDetailsId);
  }
  getPaymentCardTypes() {
    return this.adapter.getPaymentCardTypes();
  }
  static {
    this.ɵfac = function CheckoutPaymentConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentConnector)(ɵɵinject(CheckoutPaymentAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentConnector,
      factory: _CheckoutPaymentConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutPaymentAdapter
  }], null);
})();
var CheckoutAdapter = class {
};
var CheckoutConnector = class _CheckoutConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getCheckoutDetails(userId, cartId) {
    return this.adapter.getCheckoutDetails(userId, cartId);
  }
  static {
    this.ɵfac = function CheckoutConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutConnector)(ɵɵinject(CheckoutAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutConnector,
      factory: _CheckoutConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutAdapter
  }], null);
})();
var CheckoutBillingAddressService = class _CheckoutBillingAddressService {
  constructor() {
    this.activeCartFacade = inject(ActiveCartFacade);
    this.userIdService = inject(UserIdService);
    this.commandService = inject(CommandService);
    this.checkoutBillingAddressConnector = inject(CheckoutBillingAddressConnector);
    this.checkoutQueryFacade = inject(CheckoutQueryFacade);
    this.setBillingAddressCommand = this.commandService.create((address) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      if (!address || !Object.keys(address)?.length) {
        throw new Error("Checkout conditions not met");
      }
      return this.checkoutBillingAddressConnector.setBillingAddress(userId, cartId, address);
    })), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  setBillingAddress(address) {
    return this.setBillingAddressCommand.execute(address);
  }
  static {
    this.ɵfac = function CheckoutBillingAddressService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutBillingAddressService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutBillingAddressService,
      factory: _CheckoutBillingAddressService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutBillingAddressService, [{
    type: Injectable
  }], null, null);
})();
var CheckoutDeliveryAddressService = class _CheckoutDeliveryAddressService {
  constructor(activeCartFacade, userIdService, eventService, commandService, checkoutDeliveryAddressConnector, checkoutQueryFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.eventService = eventService;
    this.commandService = commandService;
    this.checkoutDeliveryAddressConnector = checkoutDeliveryAddressConnector;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.createDeliveryAddressCommand = this.commandService.create((payload) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      return this.checkoutDeliveryAddressConnector.createAddress(userId, cartId, payload).pipe(map((address) => {
        address.titleCode = payload.titleCode;
        if (payload.region?.isocodeShort) {
          address.region = __spreadProps(__spreadValues({}, address.region), {
            isocodeShort: payload.region.isocodeShort
          });
        }
        return address;
      }), tap((address) => this.eventService.dispatch({
        userId,
        cartId,
        address
      }, CheckoutDeliveryAddressCreatedEvent)));
    })), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.setDeliveryAddressCommand = this.commandService.create((address) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      const addressId = address.id;
      if (!addressId) {
        throw new Error("Checkout conditions not met");
      }
      return this.checkoutDeliveryAddressConnector.setAddress(userId, cartId, addressId).pipe(tap(() => {
        this.eventService.dispatch({
          userId,
          cartId,
          address
        }, CheckoutDeliveryAddressSetEvent);
      }));
    })), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.clearDeliveryAddressCommand = this.commandService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryAddressConnector.clearCheckoutDeliveryAddress(userId, cartId).pipe(tap(() => {
      this.eventService.dispatch({
        userId,
        cartId
      }, CheckoutDeliveryAddressClearedEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  getDeliveryAddressState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.deliveryAddress
    })));
  }
  createAndSetAddress(address) {
    return this.createDeliveryAddressCommand.execute(address);
  }
  setDeliveryAddress(address) {
    return this.setDeliveryAddressCommand.execute(address);
  }
  clearCheckoutDeliveryAddress() {
    return this.clearDeliveryAddressCommand.execute();
  }
  static {
    this.ɵfac = function CheckoutDeliveryAddressService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryAddressService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(EventService), ɵɵinject(CommandService), ɵɵinject(CheckoutDeliveryAddressConnector), ɵɵinject(CheckoutQueryFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryAddressService,
      factory: _CheckoutDeliveryAddressService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: EventService
  }, {
    type: CommandService
  }, {
    type: CheckoutDeliveryAddressConnector
  }, {
    type: CheckoutQueryFacade
  }], null);
})();
var CheckoutDeliveryModesService = class _CheckoutDeliveryModesService {
  /**
   * Returns the reload events for the supportedDeliveryModes query
   */
  getCheckoutSupportedDeliveryModesQueryReloadEvents() {
    return [CheckoutSupportedDeliveryModesQueryReloadEvent];
  }
  /**
   * Return the reset events for the supportedDeliveryModes query
   */
  getCheckoutSupportedDeliveryModesQueryResetEvents() {
    return [CheckoutSupportedDeliveryModesQueryResetEvent];
  }
  constructor(activeCartFacade, userIdService, eventService, queryService, commandService, checkoutDeliveryModesConnector, checkoutQueryFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.eventService = eventService;
    this.queryService = queryService;
    this.commandService = commandService;
    this.checkoutDeliveryModesConnector = checkoutDeliveryModesConnector;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.supportedDeliveryModesQuery = this.queryService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryModesConnector.getSupportedModes(userId, cartId))), {
      reloadOn: this.getCheckoutSupportedDeliveryModesQueryReloadEvents(),
      resetOn: this.getCheckoutSupportedDeliveryModesQueryResetEvents()
    });
    this.setDeliveryModeCommand = this.commandService.create((deliveryModeCode) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryModesConnector.setMode(userId, cartId, deliveryModeCode).pipe(tap(() => {
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode: cartId,
        deliveryModeCode
      }, CheckoutDeliveryModeSetEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.clearDeliveryModeCommand = this.commandService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryModesConnector.clearCheckoutDeliveryMode(userId, cartId).pipe(tap({
      next: () => {
        this.eventService.dispatch({
          userId,
          cartId,
          /**
           * As we know the cart is not anonymous (precondition checked),
           * we can safely use the cartId, which is actually the cart.code.
           */
          cartCode: cartId
        }, CheckoutDeliveryModeClearedEvent);
      },
      error: () => {
        this.eventService.dispatch({
          userId,
          cartId,
          /**
           * As we know the cart is not anonymous (precondition checked),
           * we can safely use the cartId, which is actually the cart.code.
           */
          cartCode: cartId
        }, CheckoutDeliveryModeClearedErrorEvent);
      }
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  getSupportedDeliveryModesState() {
    return this.supportedDeliveryModesQuery.getState();
  }
  getSupportedDeliveryModes() {
    return this.getSupportedDeliveryModesState().pipe(filter((state) => !state.loading), map((state) => state.data ?? []));
  }
  getSelectedDeliveryModeState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.deliveryMode
    })));
  }
  setDeliveryMode(mode) {
    return this.setDeliveryModeCommand.execute(mode);
  }
  clearCheckoutDeliveryMode() {
    return this.clearDeliveryModeCommand.execute();
  }
  static {
    this.ɵfac = function CheckoutDeliveryModesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryModesService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(EventService), ɵɵinject(QueryService), ɵɵinject(CommandService), ɵɵinject(CheckoutDeliveryModesConnector), ɵɵinject(CheckoutQueryFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryModesService,
      factory: _CheckoutDeliveryModesService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModesService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: EventService
  }, {
    type: QueryService
  }, {
    type: CommandService
  }, {
    type: CheckoutDeliveryModesConnector
  }, {
    type: CheckoutQueryFacade
  }], null);
})();
var CheckoutPaymentService = class _CheckoutPaymentService {
  /**
   * Returns the reload events for the cardTypes query
   */
  getCheckoutPaymentCardTypesQueryReloadEvents() {
    return [CheckoutPaymentCardTypesQueryReloadEvent];
  }
  /**
   * Returns the reset events for the cardTypes query
   */
  getCheckoutPaymentCardTypesQueryResetEvents() {
    return [CheckoutPaymentCardTypesQueryResetEvent];
  }
  constructor(activeCartFacade, userIdService, queryService, commandService, eventService, checkoutPaymentConnector, checkoutQueryFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.queryService = queryService;
    this.commandService = commandService;
    this.eventService = eventService;
    this.checkoutPaymentConnector = checkoutPaymentConnector;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.paymentCardTypesQuery = this.queryService.create(() => this.checkoutPaymentConnector.getPaymentCardTypes(), {
      reloadOn: this.getCheckoutPaymentCardTypesQueryReloadEvents(),
      resetOn: this.getCheckoutPaymentCardTypesQueryResetEvents()
    });
    this.createPaymentMethodCommand = this.commandService.create((paymentDetails) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutPaymentConnector.createPaymentDetails(userId, cartId, paymentDetails).pipe(tap((response) => this.eventService.dispatch({
      userId,
      cartId,
      paymentDetails: response
    }, CheckoutPaymentDetailsCreatedEvent))))), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.setPaymentMethodCommand = this.commandService.create((paymentDetails) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      const paymentDetailsId = paymentDetails?.id;
      if (!paymentDetailsId) {
        throw new Error("Checkout conditions not met");
      }
      return this.checkoutPaymentConnector.setPaymentDetails(userId, cartId, paymentDetailsId).pipe(tap(() => this.eventService.dispatch({
        userId,
        cartId,
        paymentDetailsId
      }, CheckoutPaymentDetailsSetEvent)));
    })), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  getPaymentCardTypesState() {
    return this.paymentCardTypesQuery.getState();
  }
  getPaymentCardTypes() {
    return this.getPaymentCardTypesState().pipe(map((state) => state.data ?? []));
  }
  getPaymentDetailsState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.paymentInfo
    })));
  }
  createPaymentDetails(paymentDetails) {
    return this.createPaymentMethodCommand.execute(paymentDetails);
  }
  setPaymentDetails(paymentDetails) {
    return this.setPaymentMethodCommand.execute(paymentDetails);
  }
  static {
    this.ɵfac = function CheckoutPaymentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(QueryService), ɵɵinject(CommandService), ɵɵinject(EventService), ɵɵinject(CheckoutPaymentConnector), ɵɵinject(CheckoutQueryFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentService,
      factory: _CheckoutPaymentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }, {
    type: CommandService
  }, {
    type: EventService
  }, {
    type: CheckoutPaymentConnector
  }, {
    type: CheckoutQueryFacade
  }], null);
})();
var CheckoutQueryService = class _CheckoutQueryService {
  /**
   * Returns the reload events for the checkout query.
   */
  getCheckoutQueryReloadEvents() {
    return [CheckoutQueryReloadEvent];
  }
  /**
   * Returns the reset events for the checkout query.
   */
  getCheckoutQueryResetEvents() {
    return [CheckoutQueryResetEvent];
  }
  constructor(activeCartFacade, userIdService, queryService, checkoutConnector) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.queryService = queryService;
    this.checkoutConnector = checkoutConnector;
    this.checkoutQuery$ = this.queryService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutConnector.getCheckoutDetails(userId, cartId))), {
      reloadOn: this.getCheckoutQueryReloadEvents(),
      resetOn: this.getCheckoutQueryResetEvents()
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  getCheckoutDetailsState() {
    return this.checkoutQuery$.getState();
  }
  static {
    this.ɵfac = function CheckoutQueryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutQueryService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(QueryService), ɵɵinject(CheckoutConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutQueryService,
      factory: _CheckoutQueryService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutQueryService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }, {
    type: CheckoutConnector
  }], null);
})();
var facadeProviders = [CheckoutDeliveryAddressService, {
  provide: CheckoutDeliveryAddressFacade,
  useExisting: CheckoutDeliveryAddressService
}, CheckoutDeliveryModesService, {
  provide: CheckoutDeliveryModesFacade,
  useExisting: CheckoutDeliveryModesService
}, CheckoutPaymentService, {
  provide: CheckoutPaymentFacade,
  useExisting: CheckoutPaymentService
}, CheckoutQueryService, {
  provide: CheckoutQueryFacade,
  useExisting: CheckoutQueryService
}, CheckoutBillingAddressService, {
  provide: CheckoutBillingAddressFacade,
  useExisting: CheckoutBillingAddressService
}];
var CheckoutPageMetaResolver = class _CheckoutPageMetaResolver extends PageMetaResolver {
  constructor(translationService, activeCartFacade, basePageMetaResolver) {
    super();
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.basePageMetaResolver = basePageMetaResolver;
    this.pageType = PageType.CONTENT_PAGE;
    this.pageTemplate = "MultiStepCheckoutSummaryPageTemplate";
  }
  /**
   * @override
   * Resolves the page title for the Checkout Page to include checkout step.
   * The page title used by the browser (history, tabs) and crawlers.
   *
   * The title from the page data is ignored for this page title.
   */
  resolveTitle() {
    return this.basePageMetaResolver.resolveTitle();
  }
  /**
   * Resolves the page heading for the Checkout Page.
   * The page heading is used in the UI (`<h1>`), where as the page
   * title is used by the browser and crawlers.
   */
  resolveHeading() {
    return this.translationService.translate("pageMetaResolver.checkout.title");
  }
  resolveDescription() {
    return this.basePageMetaResolver.resolveDescription();
  }
  resolveRobots() {
    return this.basePageMetaResolver.resolveRobots();
  }
  static {
    this.ɵfac = function CheckoutPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(ActiveCartFacade), ɵɵinject(BasePageMetaResolver));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPageMetaResolver,
      factory: _CheckoutPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: ActiveCartFacade
  }, {
    type: BasePageMetaResolver
  }], null);
})();
var CheckoutCoreModule = class _CheckoutCoreModule {
  static {
    this.ɵfac = function CheckoutCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders, CheckoutDeliveryAddressConnector, CheckoutBillingAddressConnector, CheckoutDeliveryModesConnector, CheckoutPaymentConnector, CheckoutConnector, CheckoutPageMetaResolver, {
        provide: PageMetaResolver,
        useExisting: CheckoutPageMetaResolver,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...facadeProviders, CheckoutDeliveryAddressConnector, CheckoutBillingAddressConnector, CheckoutDeliveryModesConnector, CheckoutPaymentConnector, CheckoutConnector, CheckoutPageMetaResolver, {
        provide: PageMetaResolver,
        useExisting: CheckoutPageMetaResolver,
        multi: true
      }]
    }]
  }], null, null);
})();
var DELIVERY_MODE_NORMALIZER = new InjectionToken("DeliveryModeNormalizer");
var PAYMENT_DETAILS_SERIALIZER = new InjectionToken("PaymentDetailsSerializer");
var PAYMENT_CARD_TYPE_NORMALIZER = new InjectionToken("PaymentCardTypeNormalizer");
var CHECKOUT_NORMALIZER = new InjectionToken("CheckoutNormalizer");

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-occ.mjs
var OccCheckoutBillingAddressAdapter = class _OccCheckoutBillingAddressAdapter {
  constructor() {
    this.logger = inject(LoggerService);
    this.http = inject(HttpClient);
    this.occEndpoints = inject(OccEndpointsService);
    this.converter = inject(ConverterService);
  }
  setBillingAddress(userId, cartId, address) {
    return this.http.put(this.getSetBillingAddressEndpoint(userId, cartId), address).pipe(catchError((error) => throwError(tryNormalizeHttpError(error, this.logger))), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetBillingAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("setBillingAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutBillingAddressAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutBillingAddressAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutBillingAddressAdapter,
      factory: _OccCheckoutBillingAddressAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutBillingAddressAdapter, [{
    type: Injectable
  }], null, null);
})();
var OccCheckoutDeliveryAddressAdapter = class _OccCheckoutDeliveryAddressAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  createAddress(userId, cartId, address) {
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.post(this.getCreateDeliveryAddressEndpoint(userId, cartId), address, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(ADDRESS_NORMALIZER));
  }
  getCreateDeliveryAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("createDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  setAddress(userId, cartId, addressId) {
    return this.http.put(this.getSetDeliveryAddressEndpoint(userId, cartId, addressId), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetDeliveryAddressEndpoint(userId, cartId, addressId) {
    return this.occEndpoints.buildUrl("setDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        addressId
      }
    });
  }
  clearCheckoutDeliveryAddress(userId, cartId) {
    return this.http.delete(this.getRemoveDeliveryAddressEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getRemoveDeliveryAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("removeDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutDeliveryAddressAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutDeliveryAddressAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutDeliveryAddressAdapter,
      factory: _OccCheckoutDeliveryAddressAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutDeliveryAddressAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCheckoutDeliveryModesAdapter = class _OccCheckoutDeliveryModesAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  setMode(userId, cartId, deliveryModeId) {
    return this.http.put(this.getSetDeliveryModeEndpoint(userId, cartId, deliveryModeId), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetDeliveryModeEndpoint(userId, cartId, deliveryModeId) {
    return this.occEndpoints.buildUrl("setDeliveryMode", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        deliveryModeId
      }
    });
  }
  getSupportedModes(userId, cartId) {
    return this.http.get(this.getDeliveryModesEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), map((listResponse) => listResponse.deliveryModes ?? []), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
  }
  getDeliveryModesEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("deliveryModes", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  clearCheckoutDeliveryMode(userId, cartId) {
    return this.http.delete(this.getClearDeliveryModeEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getClearDeliveryModeEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("clearDeliveryMode", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutDeliveryModesAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutDeliveryModesAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutDeliveryModesAdapter,
      factory: _OccCheckoutDeliveryModesAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutDeliveryModesAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCheckoutPaymentAdapter = class _OccCheckoutPaymentAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
    if (typeof DOMParser !== "undefined") {
      this.domparser = new DOMParser();
    }
  }
  createPaymentDetails(userId, cartId, paymentDetails) {
    paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
    return this.getProviderSubInfo(userId, cartId).pipe(map((data) => {
      const labelsMap = this.convertToMap(data.mappingLabels.entry);
      return {
        url: data.postUrl,
        parameters: this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
        mappingLabels: labelsMap
      };
    }), mergeMap((sub) => (
      // create a subscription directly with payment provider
      this.createSubWithProvider(sub.url, sub.parameters).pipe(map((response) => this.extractPaymentDetailsFromHtml(response)), mergeMap((fromPaymentProvider) => {
        fromPaymentProvider["defaultPayment"] = paymentDetails.defaultPayment ?? false;
        fromPaymentProvider["savePaymentInfo"] = true;
        return this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(catchError((error) => {
          throw tryNormalizeHttpError(error, this.logger);
        }), backOff({
          shouldRetry: isJaloError
        }), this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
      }))
    )));
  }
  setPaymentDetails(userId, cartId, paymentDetailsId) {
    return this.http.put(this.getSetPaymentDetailsEndpoint(userId, cartId, paymentDetailsId), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetPaymentDetailsEndpoint(userId, cartId, paymentDetailsId) {
    return this.occEndpoints.buildUrl("setCartPaymentDetails", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        paymentDetailsId
      }
    });
  }
  getPaymentCardTypes() {
    return this.http.get(this.getPaymentCardTypesEndpoint()).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), map((cardTypeList) => cardTypeList.cardTypes ?? []), this.converter.pipeableMany(PAYMENT_CARD_TYPE_NORMALIZER));
  }
  getPaymentCardTypesEndpoint() {
    return this.occEndpoints.buildUrl("cardTypes");
  }
  getProviderSubInfo(userId, cartId) {
    return this.http.get(this.getPaymentProviderSubInfoEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getPaymentProviderSubInfoEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("paymentProviderSubInfo", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  createSubWithProvider(postUrl, parameters) {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "text/html"
    });
    let httpParams = new HttpParams({
      encoder: new HttpParamsURIEncoder()
    });
    Object.keys(parameters).forEach((key) => {
      httpParams = httpParams.append(key, parameters[key]);
    });
    return this.http.post(postUrl, httpParams, {
      headers,
      responseType: "text"
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  createDetailsWithParameters(userId, cartId, parameters) {
    let httpParams = new HttpParams({
      encoder: new HttpParamsURIEncoder()
    });
    Object.keys(parameters).forEach((key) => {
      httpParams = httpParams.append(key, parameters[key]);
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return this.http.post(this.getCreatePaymentDetailsEndpoint(userId, cartId), httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getCreatePaymentDetailsEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("createPaymentDetails", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getParamsForPaymentProvider(paymentDetails, parameters, mappingLabels) {
    const params = this.convertToMap(parameters);
    params[mappingLabels["hybris_account_holder_name"]] = paymentDetails.accountHolderName;
    params[mappingLabels["hybris_card_type"]] = paymentDetails.cardType?.code;
    params[mappingLabels["hybris_card_number"]] = paymentDetails.cardNumber;
    if (mappingLabels["hybris_combined_expiry_date"] === "true") {
      params[mappingLabels["hybris_card_expiry_date"]] = paymentDetails.expiryMonth + mappingLabels["hybris_separator_expiry_date"] + paymentDetails.expiryYear;
    } else {
      params[mappingLabels["hybris_card_expiration_month"]] = paymentDetails.expiryMonth;
      params[mappingLabels["hybris_card_expiration_year"]] = paymentDetails.expiryYear;
    }
    params[mappingLabels["hybris_card_cvn"]] = paymentDetails.cvn;
    params[mappingLabels["hybris_billTo_country"]] = paymentDetails.billingAddress?.country?.isocode;
    params[mappingLabels["hybris_billTo_firstname"]] = paymentDetails.billingAddress?.firstName;
    params[mappingLabels["hybris_billTo_lastname"]] = paymentDetails.billingAddress?.lastName;
    params[mappingLabels["hybris_billTo_street1"]] = paymentDetails.billingAddress?.line1 + " " + paymentDetails.billingAddress?.line2;
    params[mappingLabels["hybris_billTo_city"]] = paymentDetails.billingAddress?.town;
    if (paymentDetails.billingAddress?.region) {
      params[mappingLabels["hybris_billTo_region"]] = paymentDetails.billingAddress.region.isocodeShort;
    } else {
      params[mappingLabels["hybris_billTo_region"]] = "";
    }
    params[mappingLabels["hybris_billTo_postalcode"]] = paymentDetails.billingAddress?.postalCode;
    return params;
  }
  extractPaymentDetailsFromHtml(html) {
    const domdoc = this.domparser.parseFromString(html, "text/xml");
    const responseForm = domdoc.getElementsByTagName("form")[0];
    const inputs = responseForm.getElementsByTagName("input");
    const values = {};
    for (let i = 0; inputs[i]; i++) {
      const input = inputs[i];
      const name = input.getAttribute("name");
      const value = input.getAttribute("value");
      if (name && name !== "{}" && value && value !== "") {
        values[name] = value;
      }
    }
    return values;
  }
  convertToMap(paramList) {
    return paramList.reduce(function(result, item) {
      const key = item.key;
      result[key] = item.value;
      return result;
    }, {});
  }
  static {
    this.ɵfac = function OccCheckoutPaymentAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutPaymentAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutPaymentAdapter,
      factory: _OccCheckoutPaymentAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutPaymentAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCheckoutAdapter = class _OccCheckoutAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getCheckoutDetails(userId, cartId) {
    return this.http.get(this.getGetCheckoutDetailsEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(CHECKOUT_NORMALIZER));
  }
  getGetCheckoutDetailsEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("getCheckoutDetails", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutAdapter,
      factory: _OccCheckoutAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var DELIVERY_ENDPOINT = "users/${userId}/carts/${cartId}/addresses/delivery";
var DELIVERY_MODE_ENDPOINT = "users/${userId}/carts/${cartId}/deliverymode";
var defaultOccCheckoutConfig = {
  backend: {
    occ: {
      endpoints: {
        setDeliveryAddress: DELIVERY_ENDPOINT,
        cardTypes: "cardtypes",
        createDeliveryAddress: DELIVERY_ENDPOINT,
        removeDeliveryAddress: DELIVERY_ENDPOINT,
        deliveryMode: DELIVERY_MODE_ENDPOINT,
        setDeliveryMode: DELIVERY_MODE_ENDPOINT,
        clearDeliveryMode: DELIVERY_MODE_ENDPOINT,
        deliveryModes: `${DELIVERY_MODE_ENDPOINT}s`,
        setCartPaymentDetails: "users/${userId}/carts/${cartId}/paymentdetails",
        paymentProviderSubInfo: "users/${userId}/carts/${cartId}/payment/sop/request?responseUrl=sampleUrl",
        createPaymentDetails: "users/${userId}/carts/${cartId}/payment/sop/response",
        getCheckoutDetails: "users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL)",
        setBillingAddress: "users/${userId}/carts/${cartId}/addresses/billing"
      }
    }
  }
};
var CheckoutOccModule = class _CheckoutOccModule {
  static {
    this.ɵfac = function CheckoutOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccCheckoutConfig), {
        provide: CheckoutAdapter,
        useClass: OccCheckoutAdapter
      }, {
        provide: CheckoutDeliveryAddressAdapter,
        useClass: OccCheckoutDeliveryAddressAdapter
      }, {
        provide: CheckoutDeliveryModesAdapter,
        useClass: OccCheckoutDeliveryModesAdapter
      }, {
        provide: CheckoutPaymentAdapter,
        useClass: OccCheckoutPaymentAdapter
      }, {
        provide: CheckoutBillingAddressAdapter,
        useClass: OccCheckoutBillingAddressAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccCheckoutConfig), {
        provide: CheckoutAdapter,
        useClass: OccCheckoutAdapter
      }, {
        provide: CheckoutDeliveryAddressAdapter,
        useClass: OccCheckoutDeliveryAddressAdapter
      }, {
        provide: CheckoutDeliveryModesAdapter,
        useClass: OccCheckoutDeliveryModesAdapter
      }, {
        provide: CheckoutPaymentAdapter,
        useClass: OccCheckoutPaymentAdapter
      }, {
        provide: CheckoutBillingAddressAdapter,
        useClass: OccCheckoutBillingAddressAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base.mjs
var CheckoutModule = class _CheckoutModule {
  static {
    this.ɵfac = function CheckoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutModule,
      imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
    }]
  }], null, null);
})();
export {
  CheckoutModule
};
//# sourceMappingURL=@spartacus_checkout_base.js.map
