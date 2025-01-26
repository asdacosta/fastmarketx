import Link from "next/link";
import React from "react";
import { SearchInput } from "./SearchInput";
import { CampusSelect } from "./CampusSelect";

function page() {
  return (
    <nav>
      <section>
        <Link href="/">
          <h1>CampusairX</h1>
        </Link>
      </section>

      <section>
        <SearchInput />
        <CampusSelect />
      </section>

      <section>
        <Link href="/menu">Menu</Link>
        <Link href="/account">Account</Link>
        <div>Cart</div>
      </section>
    </nav>
  );
}

export { page };
