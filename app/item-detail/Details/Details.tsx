import React from "react";
import styles from "./Details.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function Details() {
  const itemData = useSelector((state: RootState) => state.itemDetail.itemData);

  return (
    <section className={styles.details}>
      <h2>{itemData.categoryName} Details</h2>
      <div className={styles.about}>
        <h3>About {itemData.categoryName}</h3>
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
