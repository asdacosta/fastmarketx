import React from "react";
import styles from "./Ads.module.css";
import ItemTemplate from "@/app/ItemTemplate/ItemTemplate";

function Ads() {
  return (
    <section className={styles.ads}>
      <section>
        <button>Promote Products</button>
      </section>
      <section className={styles.promoted}>
        <h2>Promoted Products</h2>
        <div>
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Promoted: 2/02/2025", "Expire: 2/02/2025"]}
          />
          <ItemTemplate
            itemsQuantity={1}
            extraDetails={["Promoted: 2/02/2025", "Expire: 2/02/2025"]}
          />
        </div>
      </section>
    </section>
  );
}

export default Ads;
