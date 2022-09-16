import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stripe Demo Store</title>
        <meta name="description" content="Demo Store using Stripe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Hero />
        </div>
        <div className={styles.products_title}>
          <h2>Trenading Products</h2>
        </div>
        <div>
          <Products />
        </div>
        <div></div>
      </div>
    </div>
  );
}
