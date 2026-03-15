package com.readora.core.productcompare.service;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.product.ProductModel;

import java.util.Set;

public interface ProductCompareService {
    Set<ProductModel> getCompareProducts(final B2BCustomerModel customer);
}
