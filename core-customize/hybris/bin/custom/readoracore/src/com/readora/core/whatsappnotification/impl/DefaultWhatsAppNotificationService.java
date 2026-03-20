package com.readora.core.whatsappnotification.impl;

import com.readora.core.whatsappnotification.WhatsAppNotificationService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.model.ModelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

public class DefaultWhatsAppNotificationService implements WhatsAppNotificationService {

    private static final Logger LOG = LoggerFactory.getLogger(DefaultWhatsAppNotificationService.class);
    private static final String WHATSAPP_API_URL = "https://graph.facebook.com/v18.0/{phoneNumberId}/messages";

    private RestTemplate restTemplate;
    private ModelService modelService;
    private String apiToken;
    private String phoneNumberId;

    @Override
    public void sendAbandonedCartMessage(final B2BCustomerModel customer, final CartModel cart) {
        final String phone = customer.getPhone();
        if (phone == null) {
            LOG.warn("No phone number for customer {}", customer.getUid());
            return;
        }

        try {
            sendMessage(phone, buildMessagePayload(customer, cart));
            cart.setWhatsappNotified(Boolean.TRUE);
            modelService.save(cart);

        } catch (final Exception e) {
            LOG.error("Failed to send WhatsApp message to {}", phone, e);
        }
    }

    private void sendMessage(final String phone, final Map<String, Object> payload) {
        final HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        final String url = WHATSAPP_API_URL.replace("{phoneNumberId}", phoneNumberId);
        final HttpEntity<Map<String, Object>> request = new HttpEntity<>(payload, headers);

        restTemplate.postForEntity(url, request, String.class);
    }

    private Map<String, Object> buildMessagePayload(
            final B2BCustomerModel customer, final CartModel cart) {

        // Using a pre-approved WhatsApp message template
        return Map.of(
                "messaging_product", "whatsapp",
                "to", customer.getPhone(),
                "type", "template",
                "template", Map.of(
                        "name", "abandoned_cart_reminder",  // pre-approved template name in Meta dashboard
                        "language", Map.of("code", "en"),
                        "components", List.of(
                                Map.of(
                                        "type", "body",
                                        "parameters", List.of(
                                                Map.of("type", "text", "text", customer.getName()),
                                                Map.of("type", "text", "text", String.valueOf(cart.getEntries().size()))
                                        )
                                )
                        )
                )
        );
    }

    public String getPhoneNumberId() {
        return phoneNumberId;
    }

    public void setPhoneNumberId(String phoneNumberId) {
        this.phoneNumberId = phoneNumberId;
    }

    public String getApiToken() {
        return apiToken;
    }

    public void setApiToken(String apiToken) {
        this.apiToken = apiToken;
    }

    public ModelService getModelService() {
        return modelService;
    }

    public void setModelService(ModelService modelService) {
        this.modelService = modelService;
    }

    public RestTemplate getRestTemplate() {
        return restTemplate;
    }

    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
}
