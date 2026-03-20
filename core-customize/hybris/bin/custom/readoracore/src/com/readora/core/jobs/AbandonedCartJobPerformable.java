package com.readora.core.jobs;

import com.readora.core.whatsappnotification.WhatsAppNotificationService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

public class AbandonedCartJobPerformable extends AbstractJobPerformable<CronJobModel> {

    private static final int ABANDONED_THRESHOLD_HOURS = 2;

    private WhatsAppNotificationService whatsAppNotificationService;
    private FlexibleSearchService flexibleSearchService;

    @Override
    public PerformResult perform(final CronJobModel cronJob) {
        final List<CartModel> abandonedCarts = findAbandonedCarts();

        for (final CartModel cart : abandonedCarts) {
            if (cart.getUser() instanceof B2BCustomerModel customer) {
                getWhatsAppNotificationService().sendAbandonedCartMessage(customer, cart);
            }
        }
        return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
    }

    private List<CartModel> findAbandonedCarts() {
        final Date threshold = Date.from(Instant.now().minus(ABANDONED_THRESHOLD_HOURS, ChronoUnit.MINUTES));

         String query =
                "SELECT {c:pk} FROM {Cart AS c} " +
                        "WHERE {c:modifiedtime} < ?threshold ";

        final FlexibleSearchQuery fsq = new FlexibleSearchQuery(query);
        fsq.addQueryParameter("threshold", threshold);

        return getFlexibleSearchService().<CartModel>search(fsq).getResult();
    }

    public WhatsAppNotificationService getWhatsAppNotificationService() {
        return whatsAppNotificationService;
    }

    public void setWhatsAppNotificationService(WhatsAppNotificationService whatsAppNotificationService) {
        this.whatsAppNotificationService = whatsAppNotificationService;
    }

    public FlexibleSearchService getFlexibleSearchService() {
        return flexibleSearchService;
    }

    @Override
    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
        this.flexibleSearchService = flexibleSearchService;
    }
}