package com.readora.core.productcompare.dao.impl;

import com.readora.core.productcompare.dao.ProductCompareDao;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.HashSet;
import java.util.Set;

public class DefaultProductCompareDao implements ProductCompareDao {

    private static final String QUERY =
            "SELECT {p.pk} " +
                    "FROM {Product AS p " +
                    "JOIN UserProductCompareRelation AS rel ON {rel.target} = {p.pk} " +
                    "JOIN User AS u ON {rel.source} = {u.pk}} " +
                    "WHERE {u.uid} = ?uid";

    private FlexibleSearchService flexibleSearchService;

    @Override
    public Set<ProductModel> findCompareProductsForUser(final String userUid) {
        final FlexibleSearchQuery query = new FlexibleSearchQuery(QUERY);
        query.addQueryParameter("uid", userUid);

        final SearchResult<ProductModel> result = getFlexibleSearchService().search(query);

        return new HashSet<>(result.getResult());
    }

    public FlexibleSearchService getFlexibleSearchService() {
        return flexibleSearchService;
    }

    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
        this.flexibleSearchService = flexibleSearchService;
    }
}