import React from "react";
import styles from "./page.module.css";
import Header from "../Header/Header";
import FAQItem from "./FAQItem/FAQItem";
import { faqData } from "./FAQItem/faqData";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.page}>
        <section className={styles.about}>
          <h2>How CampusairX Works</h2>
          <div className={styles.textBox}>
            <span>
              CampusairX is a campus-focused online marketplace that connects
              students and external buyers for trading. Whether you're looking
              for products, meals, or services, we provide a reliable and secure
              platform to buy and sell conveniently.
            </span>
            <ul>
              <li>
                <em>Buying from the Official Store</em>: When you purchase from
                the official CampusairX store, our team manages communication
                and delivery.
              </li>
              <li>
                <em>Buying from Other Stores</em>: Sellers manage their own
                stores, handling communication and delivery. However, we oversee
                the process and transactions to ensure transparent and secure
                trading.
              </li>
            </ul>
            <span>
              CampusairX is built on trust, convenience, and security, making
              campus trading simpler, more reliable, and safer.
            </span>
          </div>
        </section>
        <section className={styles.faq}>
          <h2>FAQ (Frequently Asked Questions)</h2>
          {Object.entries(faqData).map(([categoryTitle, faqs]) => (
            <div key={categoryTitle} className={styles.faqCards}>
              <h3 className={styles.faqCategoryTitle}>{categoryTitle}</h3>
              <div className={styles.faqCategory}>
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Page;
