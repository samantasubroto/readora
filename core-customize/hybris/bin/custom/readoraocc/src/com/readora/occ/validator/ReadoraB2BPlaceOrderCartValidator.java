package com.readora.occ.validator;

import de.hybris.platform.b2bocc.validators.B2BPlaceOrderCartValidator;
import de.hybris.platform.commercefacades.order.data.CartData;
import org.springframework.validation.Errors;

public class ReadoraB2BPlaceOrderCartValidator extends B2BPlaceOrderCartValidator {

    @Override
    public void validate(final Object target, final Errors errors) {
        final CartData cart = (CartData) target;

        if (!cart.isCalculated()) {
            errors.reject("cart.notCalculated");
        }
    }
}
