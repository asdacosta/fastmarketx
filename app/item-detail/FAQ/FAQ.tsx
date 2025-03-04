import React from "react";
import styles from "./FAQ.module.css";
import FAQItem from "@/app/about/FAQItem/FAQItem";

function FAQ() {
  return (
    <section className={styles.faq}>
      <h3>Frequently Asked Questions</h3>
      <section className={styles.faqCategory}>
        <FAQItem
          question="How do I place an order?"
          answer="Browse and select your desired products, meals, or services. Add them to your cart and proceed to checkout. Choose a payment method (if applicable) and confirm your order. The seller (or CampusairX for official store orders) will contact you for delivery."
        />
        <FAQItem
          question="What payment methods are available?"
          answer="CampusairX currently supports only mobile money and cash on delivery."
        />
        <FAQItem
          question="Does CampusairX hold funds until delivery?"
          answer="Yes, For payments made via online, sellers receive the money after completing the delivery."
        />
        <FAQItem
          question="How do I track my order?"
          answer="You can track your order by going to My Orders in your profile. The seller will also provide updates on delivery."
        />
        <FAQItem
          question="How long does delivery take?"
          answer="Delivery usually takes within 24 hours, depending on location."
        />
        <FAQItem
          question="What happens if I don't receive my order?"
          answer="If a seller fails to deliver, CampusairX will step in to resolve the issue and may refund your payment or take action against the seller."
        />
        <FAQItem
          question="Are there refunds if I receive a damaged product?"
          answer="Yes, if a product arrives damaged, contact the seller or CampusairX support within 24 hours for a resolution."
        />
        <FAQItem
          question="Can I schedule a delivery?"
          answer="Yes, we offer scheduled deliveries."
        />
      </section>
    </section>
  );
}

export default FAQ;
