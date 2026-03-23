package com.readora.core.payment;

public interface RazorpayPaymentService {
    String createOrder(final String commerceOrderCode, final Double amount, final String currency);

    boolean verifyPaymentSignature(final String razorpayOrderId, final String razorpayPaymentId, final String razorpaySignature);
}
