package com.readora.occ.controllers;

import com.readora.facades.productcompare.ProductCompareFacade;
import com.readora.occ.dto.productcompare.ProductCompareWsDTO;
import de.hybris.platform.b2bocc.security.SecuredAccessConstants;
import de.hybris.platform.b2bocc.v2.controllers.BaseController;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductListWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/{baseSiteId}/users/{userId}/productcompare")
@Tag(name = "Product Compare")
public class ReadoraProductCompareController extends BaseController {

    @Resource(name = "productCompareFacade")
    private ProductCompareFacade productCompareFacade;

    @Secured({SecuredAccessConstants.ROLE_CUSTOMERGROUP, SecuredAccessConstants.ROLE_TRUSTED_CLIENT, SecuredAccessConstants.ROLE_CUSTOMERMANAGERGROUP})
    @Operation(description = "Get compared products")
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public ProductCompareWsDTO getProductCompare(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {

        final Set<ProductData> products = productCompareFacade.getProductCompare();

        final ProductCompareWsDTO result = new ProductCompareWsDTO();
        result.setProducts(getDataMapper().mapAsList(new ArrayList<>(products), ProductWsDTO.class, fields));
        result.setTotalCount(products.size());
        return result;
    }

    @Secured({SecuredAccessConstants.ROLE_CUSTOMERGROUP, SecuredAccessConstants.ROLE_TRUSTED_CLIENT, SecuredAccessConstants.ROLE_CUSTOMERMANAGERGROUP})
    @Operation(description = "Add product to compare")
    @RequestMapping(value = "/{code}", method = RequestMethod.POST)
    @ResponseBody
    @ApiBaseSiteIdAndUserIdParam
    public ProductCompareWsDTO addProduct(
            @PathVariable final String code,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {

        final Set<ProductData> products = productCompareFacade.addProduct(code);
        final ProductCompareWsDTO result = new ProductCompareWsDTO();
        result.setProducts(getDataMapper().mapAsList(new ArrayList<>(products), ProductWsDTO.class, fields));
        result.setTotalCount(products.size());
        return result;
    }

    @Secured({SecuredAccessConstants.ROLE_CUSTOMERGROUP, SecuredAccessConstants.ROLE_TRUSTED_CLIENT, SecuredAccessConstants.ROLE_CUSTOMERMANAGERGROUP})
    @Operation(description = "Remove product from compare")
    @RequestMapping(value = "/{code}", method = RequestMethod.DELETE)
    @ApiBaseSiteIdAndUserIdParam
    public ProductCompareWsDTO removeProduct(
            @PathVariable final String code,
            @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final Set<ProductData> products = productCompareFacade.removeProduct(code);
        final ProductCompareWsDTO result = new ProductCompareWsDTO();
        result.setProducts(getDataMapper().mapAsList(new ArrayList<>(products), ProductWsDTO.class, fields));
        result.setTotalCount(products.size());
        return result;
    }
}