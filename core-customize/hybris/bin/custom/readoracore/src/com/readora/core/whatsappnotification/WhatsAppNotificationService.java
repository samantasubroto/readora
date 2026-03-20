package com.readora.core.whatsappnotification;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.order.CartModel;

public interface WhatsAppNotificationService {
    public void sendAbandonedCartMessage(final B2BCustomerModel customer, final CartModel cart);
}
