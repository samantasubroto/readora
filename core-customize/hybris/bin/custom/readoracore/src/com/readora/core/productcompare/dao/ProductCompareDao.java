package com.readora.core.productcompare.dao;

import de.hybris.platform.core.model.product.ProductModel;

import java.util.Set;

public interface ProductCompareDao {
    Set<ProductModel> findCompareProductsForUser(String userUid);
}
