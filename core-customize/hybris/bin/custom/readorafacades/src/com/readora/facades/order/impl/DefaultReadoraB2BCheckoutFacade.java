package com.readora.facades.order.impl;

import com.readora.facades.order.ReadoraB2BCheckoutFacade;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import de.hybris.platform.b2bacceleratorfacades.checkout.data.PlaceOrderData;
import de.hybris.platform.b2bacceleratorfacades.exception.EntityValidationException;
import de.hybris.platform.b2bacceleratorfacades.order.impl.DefaultB2BAcceleratorCheckoutFacade;
import de.hybris.platform.commercefacades.order.data.AbstractOrderData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.user.UserFacade;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.payment.SAPGenericPaymentInfoModel;
import de.hybris.platform.order.InvalidCartException;

import static de.hybris.platform.util.localization.Localization.getLocalizedString;

public class DefaultReadoraB2BCheckoutFacade extends DefaultB2BAcceleratorCheckoutFacade implements ReadoraB2BCheckoutFacade {

    private static final String CART_CHECKOUT_DELIVERYADDRESS_INVALID = "cart.deliveryAddress.invalid";
    private static final String CART_CHECKOUT_NOT_CALCULATED = "cart.not.calculated";

    private UserFacade userFacade;

    @Override
    public CartData updateCheckoutCart(final CartData cartData) {
        final CartModel cartModel = getCart();
        if (cartModel == null) {
            return null;
        }
        if (cartData.getPurchaseOrderNumber() != null) {
            cartModel.setPurchaseOrderNumber(cartData.getPurchaseOrderNumber());
        }
        if (cartData.getDeliveryAddress() != null) {
            setDeliveryAddress(cartData.getDeliveryAddress());
        }
        getModelService().save(cartModel);
        return getCheckoutCart();
    }

    @Override
    public <T extends AbstractOrderData> T placeOrder(final PlaceOrderData placeOrderData) throws InvalidCartException {
        final boolean isCardtPaymentType = CheckoutPaymentType.CARD.equals(getCart().getPaymentType());
        if (isCardtPaymentType && !(getCart().getPaymentInfo() instanceof SAPGenericPaymentInfoModel)) {
            /**
             * Implement Payment in future
             */
        }

        if (isValidCheckoutCart(placeOrderData)) {
            return (T) super.placeOrder();
        }

        return null;
    }

    protected boolean isValidCheckoutCart(final PlaceOrderData placeOrderData) {
        final CartData cartData = getCheckoutCart();
        final boolean valid = true;

        if (!cartData.isCalculated()) {
            throw new EntityValidationException(getLocalizedString(CART_CHECKOUT_NOT_CALCULATED));
        }

        /**
         *
         * Need to update this later with actual delivery address
         */
        if (cartData.getDeliveryAddress() == null) {
            cartData.setDeliveryAddress(getUserFacade().getDefaultAddress());
        }

        return valid;
    }

    protected UserFacade getUserFacade() {
        return userFacade;
    }

    public void setUserFacade(UserFacade userFacade) {
        this.userFacade = userFacade;
    }
}
