/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.readora.occ.constants;

public class ReadoraoccConstants extends GeneratedReadoraoccConstants {
    public static final String EXTENSIONNAME = "readoraocc";
    public static final String OCC_REWRITE_OVERLAPPING_BASE_SITE_USER_PATH = "#{ ${occ.rewrite.overlapping.paths.enabled:false} ? '/{baseSiteId}/readoraOrgUsers/{userId}' : '/{baseSiteId}/users/{userId}'}";

    private ReadoraoccConstants() {
        //empty
    }
}

