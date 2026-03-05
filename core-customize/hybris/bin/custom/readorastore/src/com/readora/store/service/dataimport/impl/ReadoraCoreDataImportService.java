package com.readora.store.service.dataimport.impl;

import de.hybris.platform.commerceservices.dataimport.impl.CoreDataImportService;

public class ReadoraCoreDataImportService extends CoreDataImportService {
    @Override
    protected void importCommonData(final String extensionName) {
        super.importCommonData(extensionName);

        getSetupImpexService().importImpexFile(String.format("/%s/import/coredata/common/cpi.impex", extensionName), true);
    }
}
