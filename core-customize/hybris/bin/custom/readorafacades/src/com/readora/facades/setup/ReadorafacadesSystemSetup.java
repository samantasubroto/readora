/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.readora.facades.setup;

import static com.readora.facades.constants.ReadorafacadesConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import java.io.InputStream;

import com.readora.facades.constants.ReadorafacadesConstants;
import com.readora.facades.service.ReadorafacadesService;


@SystemSetup(extension = ReadorafacadesConstants.EXTENSIONNAME)
public class ReadorafacadesSystemSetup
{
	private final ReadorafacadesService readorafacadesService;

	public ReadorafacadesSystemSetup(final ReadorafacadesService readorafacadesService)
	{
		this.readorafacadesService = readorafacadesService;
	}

	@SystemSetup(process = SystemSetup.Process.ALL, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		readorafacadesService.createLogo(PLATFORM_LOGO_CODE);
	}

	private InputStream getImageStream()
	{
		return ReadorafacadesSystemSetup.class.getResourceAsStream("/readorafacades/sap-hybris-platform.png");
	}
}
