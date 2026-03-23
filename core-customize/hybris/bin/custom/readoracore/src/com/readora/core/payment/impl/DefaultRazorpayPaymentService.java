package com.readora.core.payment.impl;

import com.readora.core.payment.RazorpayPaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

public class DefaultRazorpayPaymentService implements RazorpayPaymentService {

    private static final Logger LOG = LoggerFactory.getLogger(DefaultRazorpayPaymentService.class);
    private static final String RAZORPAY_CREATE_ORDER_URL = "https://api.razorpay.com/v1/orders";

    private String keyId;
    private String keySecret;
    private RestTemplate restTemplate;

    @Override
    public String createOrder(final String commerceOrderCode, final Double amount, final String currency) {
        try {
            final String auth = Base64.getEncoder().encodeToString((keyId + ":" + keySecret).getBytes(StandardCharsets.UTF_8));

            final HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("Authorization", "Basic " + auth);

            final Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("amount", (int) (amount * 100));
            requestBody.put("currency", currency);
            requestBody.put("receipt", commerceOrderCode);

            final HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
            final ResponseEntity<Map> response = restTemplate.postForEntity(RAZORPAY_CREATE_ORDER_URL, request, Map.class);

            final String razorpayOrderId = (String) response.getBody().get("id");
            LOG.info("Razorpay order created: {} for order: {}",
                    razorpayOrderId, commerceOrderCode);

            return razorpayOrderId;

        } catch (final Exception e) {
            LOG.error("Failed to create Razorpay order for: {}", commerceOrderCode, e);
            throw new RuntimeException("Razorpay order creation failed", e);
        }
    }

    @Override
    public boolean verifyPaymentSignature(final String razorpayOrderId,
                                          final String razorpayPaymentId,
                                          final String razorpaySignature) {
        try {
            final String payload = razorpayOrderId + "|" + razorpayPaymentId;
            final String generatedSignature = generateHmacSha256(payload, keySecret);
            final boolean isValid = generatedSignature.equals(razorpaySignature);

            if (isValid) {
                LOG.info("Signature verified for Razorpay order: {}", razorpayOrderId);
            } else {
                LOG.warn("Signature mismatch for Razorpay order: {}", razorpayOrderId);
            }

            return isValid;
        } catch (final Exception e) {
            LOG.error("Signature verification error", e);
            return false;
        }
    }

    private String generateHmacSha256(final String data,
                                      final String secret) throws Exception {
        final Mac mac = Mac.getInstance("HmacSHA256");
        final SecretKeySpec secretKeySpec =
                new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        mac.init(secretKeySpec);
        final byte[] hash = mac.doFinal(data.getBytes(StandardCharsets.UTF_8));
        return bytesToHex(hash);
    }

    private String bytesToHex(final byte[] bytes) {
        final StringBuilder result = new StringBuilder();
        for (final byte b : bytes) {
            result.append(String.format("%02x", b));
        }
        return result.toString();
    }

    public void setKeyId(final String keyId) {
        this.keyId = keyId;
    }

    public void setKeySecret(final String keySecret) {
        this.keySecret = keySecret;
    }

    public void setRestTemplate(final RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
}