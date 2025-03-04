import React from "react";
import styles from "./Details.module.css";

function Details() {
  return (
    <section className={styles.details}>
      <h2>Product Details</h2>
      <div className={styles.about}>
        <h3>About Product</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ipsam, officia sunt odio, quos quas recusandae adipisci natus minima
          blanditiis mollitia odit enim sint delectus illum deleniti dicta
          provident assumenda?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ipsam, officia sunt odio, quos quas recusandae adipisci natus minima
          blanditiis mollitia odit enim sint delectus illum deleniti dicta
          provident assumenda?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ipsam, officia sunt odio, quos quas recusandae adipisci natus minima
          blanditiis mollitia odit enim sint delectus illum deleniti dicta
          provident assumenda?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ipsam, officia sunt odio, quos quas recusandae adipisci natus minima
          blanditiis mollitia odit enim sint delectus illum deleniti dicta
          provident assumenda?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ipsam, officia sunt odio, quos quas recusandae adipisci natus minima
          blanditiis mollitia odit enim sint delectus illum deleniti dicta
          provident assumenda?
        </p>
      </div>
      <div className={styles.properties}>
        <h3>Main Properties</h3>
        <ul>
          <li>Very sleek</li>
          <li> Too nice and fantastic</li>
          <li>Very sleek</li>
          <li> Too nice and fantastic</li>
        </ul>
      </div>
    </section>
  );
}

export default Details;
