import React from "react";
import styles from "./Inbox.module.css";
import InboxMessage from "./InboxMessage/InboxMessage";

function Inbox() {
  const items = new Array(5).fill(1);

  return (
    <section className={styles.inbox}>
      <h3>Inbox | {items.length}</h3>
      <section className={styles.messages}>
        {items.map((item, index) => (
          <InboxMessage key={index} />
        ))}
      </section>
    </section>
  );
}

export default Inbox;
