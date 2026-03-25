package com.readora.occ.controllers;

import com.readora.core.payment.RazorpayPaymentService;
import com.readora.occ.dto.payment.RazorpayInitiateWsDTO;
import de.hybris.platform.b2bacceleratorfacades.api.cart.CartFacade;
import de.hybris.platform.b2bocc.security.SecuredAccessConstants;
import de.hybris.platform.b2bocc.v2.controllers.BaseController;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercewebservicescommons.strategies.CartLoaderStrategy;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/{baseSiteId}/users/{userId}/payment")
@Tag(name = "Payment")
public class PaymentController extends BaseController {

    private static final String RAZOR_PAY_CURRENCY = "INR";

    @Resource(name = "razorpayPaymentService")
    private RazorpayPaymentService razorpayPaymentService;

    @Resource(name = "b2bCartFacade")
    private CartFacade cartFacade;

    @Resource(name = "cartLoaderStrategy")
    private CartLoaderStrategy cartLoaderStrategy;

    @Secured({SecuredAccessConstants.ROLE_CUSTOMERGROUP, SecuredAccessConstants.ROLE_TRUSTED_CLIENT, SecuredAccessConstants.ROLE_CUSTOMERMANAGERGROUP})
    @Operation(description = "Initiate Razorpay payment for current cart")
    @PostMapping(value = "/initiate")
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public RazorpayInitiateWsDTO initiatePayment(
            @RequestParam final String cartId) {

        cartLoaderStrategy.loadCart(cartId);

        final CartData cart = cartFacade.getCurrentCart();
        final String razorpayOrderId = razorpayPaymentService.createOrder(
                cart.getCode(),
                cart.getTotalPrice().getValue().doubleValue(),
                RAZOR_PAY_CURRENCY
        );

        final RazorpayInitiateWsDTO response = new RazorpayInitiateWsDTO();
        response.setRazorpayOrderId(razorpayOrderId);
        response.setAmount(cart.getTotalPrice().getValue().doubleValue());
        response.setCurrency(RAZOR_PAY_CURRENCY);
        return response;
    }

    @Secured({SecuredAccessConstants.ROLE_CUSTOMERGROUP, SecuredAccessConstants.ROLE_TRUSTED_CLIENT, SecuredAccessConstants.ROLE_CUSTOMERMANAGERGROUP})
    @Operation(description = "Initiate refund for a payment")
    @PostMapping(value = "/refund")
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public void initiateRefund(
            @RequestParam final String paymentId,
            @RequestParam final Double amount) {
        razorpayPaymentService.initiateRefund(paymentId, amount);
    }
}