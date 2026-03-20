package com.readora.occ.controllers;

import com.readora.facades.order.ReadoraB2BCheckoutFacade;
import com.readora.occ.constants.ReadoraoccConstants;
import de.hybris.platform.b2bacceleratorfacades.api.cart.CartFacade;
import de.hybris.platform.b2bacceleratorfacades.checkout.data.PlaceOrderData;
import de.hybris.platform.b2bocc.security.SecuredAccessConstants;
import de.hybris.platform.b2bocc.v2.controllers.B2BOrdersController;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commerceservices.request.mapping.annotation.RequestMappingOverride;
import de.hybris.platform.commercewebservicescommons.annotation.SiteChannelRestriction;
import de.hybris.platform.commercewebservicescommons.dto.order.OrderWsDTO;
import de.hybris.platform.commercewebservicescommons.errors.exceptions.PaymentAuthorizationException;
import de.hybris.platform.commercewebservicescommons.strategies.CartLoaderStrategy;
import de.hybris.platform.order.InvalidCartException;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = ReadoraoccConstants.OCC_REWRITE_OVERLAPPING_BASE_SITE_USER_PATH)
@Tag(name = "Readora B2B Orders")
public class ReadoraOrdersController extends B2BOrdersController {

    @Resource(name = "readoraB2BCheckoutFacade")
    private ReadoraB2BCheckoutFacade readoraB2BCheckoutFacade;

    @Resource(name = "cartLoaderStrategy")
    private CartLoaderStrategy cartLoaderStrategy;

    @Resource(name = "b2bCartFacade")
    private CartFacade cartFacade;

    @Secured({SecuredAccessConstants.ROLE_CUSTOMERGROUP, SecuredAccessConstants.ROLE_TRUSTED_CLIENT, SecuredAccessConstants.ROLE_CUSTOMERMANAGERGROUP})
    @PostMapping(value = "/orders")
    @RequestMappingOverride(priorityProperty = "readoraocc.Orders.placeOrgOrder.priority")
    @SiteChannelRestriction(allowedSiteChannelsProperty = API_COMPATIBILITY_B2B_CHANNELS)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    @Operation(operationId = "placeOrgOrder", summary = "Creates a B2B order.")
    public OrderWsDTO placeOrgOrder(
            @RequestParam(required = true) final String cartId,
            @RequestParam(required = true) final boolean termsChecked,
            @ApiFieldsParam @RequestParam(required = false, defaultValue = FieldSetLevelHelper.DEFAULT_LEVEL) final String fields)
            throws InvalidCartException, PaymentAuthorizationException {

        validateTerms(termsChecked);
        validateUser();

        cartLoaderStrategy.loadCart(cartId);
        final CartData cartData = cartFacade.getCurrentCart();

        validateCart(cartData);
        validateAndAuthorizePayment(cartData);

        return getDataMapper().map(
                readoraB2BCheckoutFacade.placeOrder(new PlaceOrderData()),
                OrderWsDTO.class, fields);
    }
}
