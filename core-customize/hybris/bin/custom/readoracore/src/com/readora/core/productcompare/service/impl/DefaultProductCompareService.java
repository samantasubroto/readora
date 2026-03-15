package com.readora.core.productcompare.service.impl;

import com.readora.core.productcompare.dao.ProductCompareDao;
import com.readora.core.productcompare.service.ProductCompareService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.product.ProductModel;

import java.util.Set;

public class DefaultProductCompareService implements ProductCompareService {

    private ProductCompareDao productCompareDao;

    @Override
    public Set<ProductModel> getCompareProducts(final B2BCustomerModel customer) {
        return getProductCompareDao().findCompareProductsForUser(customer.getUid());
    }

    public ProductCompareDao getProductCompareDao() {
        return productCompareDao;
    }

    public void setProductCompareDao(ProductCompareDao productCompareDao) {
        this.productCompareDao = productCompareDao;
    }
}
