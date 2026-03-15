package com.readora.facades.productcompare;

import de.hybris.platform.acceleratorservices.dataexport.googlelocal.model.Product;
import de.hybris.platform.commercefacades.product.data.ProductData;

import java.util.Set;

public interface ProductCompareFacade {

    Set<ProductData> addProduct(final String code);

    Set<ProductData> removeProduct(final String code);

    Set<ProductData> getProductCompare();
}
