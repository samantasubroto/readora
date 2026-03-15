package com.readora.facades.productcompare.impl;

import com.readora.core.productcompare.service.ProductCompareService;
import com.readora.facades.productcompare.ProductCompareFacade;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BCustomerService;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.model.ModelService;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;

public class DefaultProductCompareFacade implements ProductCompareFacade {

    private final static int MAX_PRODUCT_COUNT = 4;
    private ProductService productService;
    private B2BCustomerService<B2BCustomerModel, B2BUnitModel> b2bCustomerService;
    private ModelService modelService;
    private Converter<ProductModel, ProductData> productConverter;
    private ProductCompareService productCompareService;

    @Override
    public Set<ProductData> addProduct(final String code) {
        validateParameterNotNull(code, "Product code must not be null");

        final ProductModel product = getProductService().getProductForCode(code);
        final B2BCustomerModel customer = getB2bCustomerService().getCurrentB2BCustomer();
        final Set<ProductModel> compareProducts = new HashSet<>(customer.getCompareProducts());

        if (compareProducts.contains(product)) {
            throw new IllegalArgumentException("Product already added for comparison");
        }

        if (compareProducts.size() >= MAX_PRODUCT_COUNT) {
            throw new IllegalStateException("Maximum compare product limit reached");
        }

        compareProducts.add(product);
        customer.setCompareProducts(compareProducts);
        getModelService().save(customer);
        getModelService().refresh(customer);

        return compareProducts.stream()
                .map(getProductConverter()::convert)
                .collect(Collectors.toSet());
    }

    @Override
    public Set<ProductData> removeProduct(final String code) {
        validateParameterNotNull(code, "Product code must not be null");

        final ProductModel product = getProductService().getProductForCode(code);
        final B2BCustomerModel customer = getB2bCustomerService().getCurrentB2BCustomer();
        final Set<ProductModel> compareProducts = new HashSet<>(customer.getCompareProducts());

        if (compareProducts.isEmpty()) {
            return Collections.emptySet();
        }

        compareProducts.remove(product);
        customer.setCompareProducts(compareProducts);
        getModelService().save(customer);

        return compareProducts.stream()
                .map(getProductConverter()::convert)
                .collect(Collectors.toSet());
    }

    @Override
    public Set<ProductData> getProductCompare() {
        final B2BCustomerModel customer = getB2bCustomerService().getCurrentB2BCustomer();

        final Set<ProductModel> compareProducts = new HashSet<>(getProductCompareService().getCompareProducts(customer));

        if (compareProducts.isEmpty()) {
            return Collections.emptySet();
        }

        return compareProducts.stream()
                .map(getProductConverter()::convert)
                .collect(Collectors.toSet());
    }

    public ProductService getProductService() {
        return productService;
    }

    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    public B2BCustomerService<B2BCustomerModel, B2BUnitModel> getB2bCustomerService() {
        return b2bCustomerService;
    }

    public void setB2bCustomerService(B2BCustomerService<B2BCustomerModel, B2BUnitModel> b2bCustomerService) {
        this.b2bCustomerService = b2bCustomerService;
    }

    public ModelService getModelService() {
        return modelService;
    }

    public void setModelService(ModelService modelService) {
        this.modelService = modelService;
    }

    public Converter<ProductModel, ProductData> getProductConverter() {
        return productConverter;
    }

    public void setProductConverter(Converter<ProductModel, ProductData> productConverter) {
        this.productConverter = productConverter;
    }

    public ProductCompareService getProductCompareService() {
        return productCompareService;
    }

    public void setProductCompareService(ProductCompareService productCompareService) {
        this.productCompareService = productCompareService;
    }
}
