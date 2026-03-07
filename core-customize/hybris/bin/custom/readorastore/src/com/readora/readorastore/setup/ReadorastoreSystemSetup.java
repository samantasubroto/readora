package com.readora.readorastore.setup;

import com.readora.readorastore.constants.ReadorastoreConstants;
import com.readora.readorastore.service.dataimport.impl.ReadoraSampleDataImportService;
import de.hybris.platform.commerceservices.dataimport.impl.CoreDataImportService;
import de.hybris.platform.commerceservices.setup.AbstractSystemSetup;
import de.hybris.platform.commerceservices.setup.data.ImportData;
import de.hybris.platform.commerceservices.setup.events.CoreDataImportedEvent;
import de.hybris.platform.commerceservices.setup.events.SampleDataImportedEvent;
import de.hybris.platform.core.initialization.SystemSetup;
import de.hybris.platform.core.initialization.SystemSetupContext;
import de.hybris.platform.core.initialization.SystemSetupParameter;
import de.hybris.platform.core.initialization.SystemSetupParameterMethod;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@SystemSetup(extension = ReadorastoreConstants.EXTENSIONNAME)
public class ReadorastoreSystemSetup extends AbstractSystemSetup {

	public static final String Readora = "readora";

	private static final String IMPORT_CORE_DATA = "importCoreData";
	private static final String IMPORT_SAMPLE_DATA = "importSampleData";
	private static final String ACTIVATE_SOLR_CRON_JOBS = "activateSolrCronJobs";

	private CoreDataImportService coreDataImportService;
	private ReadoraSampleDataImportService readoraSampleDataImportService;

	@SystemSetupParameterMethod
	@Override
	public List<SystemSetupParameter> getInitializationOptions() {
		final List<SystemSetupParameter> params = new ArrayList<SystemSetupParameter>();

		params.add(createBooleanSystemSetupParameter(IMPORT_CORE_DATA, "Import Core Data", true));
		params.add(createBooleanSystemSetupParameter(IMPORT_SAMPLE_DATA, "Import Sample Data", true));
		params.add(createBooleanSystemSetupParameter(ACTIVATE_SOLR_CRON_JOBS, "Activate Solr Cron Jobs", true));

		return params;
	}

	/**
	 * This method will be called during the system initialization.
	 *
	 * @param context the context provides the selected parameters and values
	 */
	@SystemSetup(type = SystemSetup.Type.PROJECT, process = SystemSetup.Process.ALL)
	public void createProjectData(final SystemSetupContext context) {
		final List<ImportData> importData = new ArrayList<ImportData>();

		final ImportData readoraImportData = new ImportData();
		readoraImportData.setProductCatalogName(Readora);
		readoraImportData.setContentCatalogNames(Arrays.asList(Readora));
		readoraImportData.setStoreNames(Arrays.asList(Readora));
		importData.add(readoraImportData);

		getCoreDataImportService().execute(this, context, importData);
		getEventService().publishEvent(new CoreDataImportedEvent(context, importData));

		getReadoraSampleDataImportService().execute(this, context, importData);
		getReadoraSampleDataImportService().importCommerceOrgData(context);

		getEventService().publishEvent(new SampleDataImportedEvent(context, importData));
	}

	protected CoreDataImportService getCoreDataImportService() {
		return coreDataImportService;
	}

	public void setCoreDataImportService(CoreDataImportService coreDataImportService) {
		this.coreDataImportService = coreDataImportService;
	}

	public ReadoraSampleDataImportService getReadoraSampleDataImportService() {
		return readoraSampleDataImportService;
	}

	public void setReadoraSampleDataImportService(ReadoraSampleDataImportService readoraSampleDataImportService) {
		this.readoraSampleDataImportService = readoraSampleDataImportService;
	}
}
