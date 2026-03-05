/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.readora.core.setup;

import static com.readora.core.constants.ReadoracoreConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import java.io.InputStream;

import com.readora.core.constants.ReadoracoreConstants;
import com.readora.core.service.ReadoracoreService;


@SystemSetup(extension = ReadoracoreConstants.EXTENSIONNAME)
public class ReadoracoreSystemSetup
{
	private final ReadoracoreService readoracoreService;

	public ReadoracoreSystemSetup(final ReadoracoreService readoracoreService)
	{
		this.readoracoreService = readoracoreService;
	}

	@SystemSetup(process = SystemSetup.Process.ALL, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		readoracoreService.createLogo(PLATFORM_LOGO_CODE);
	}

	private InputStream getImageStream()
	{
		return ReadoracoreSystemSetup.class.getResourceAsStream("/readoracore/sap-hybris-platform.png");
	}
}
