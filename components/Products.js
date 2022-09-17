import { useState } from "react";
import styles from "./products.module.css";
import Image from "next/image";

import { initiateCheckout } from "lib/payments";
import products from "@/data/products.json";

import useCart from "@/hooks/use-cart";

const defaultCart = {
  products: {},
};

export default function Productlist() {
  const { subtotal, totalItems, addToCart, checkout } = useCart();

  return (
    <div>
      <div className={styles.products_grid_container}>
        {products.map((product) => {
          const { id, title, image, price } = product;
          return (
            <div key={id} className={styles.product_card}>
              <div className={styles.card_img_container}>
                <Image src={image} alt={title} width={427} height={420} />
              </div>
              <div>
                <h4>{title}</h4>
              </div>
              <div>
                <h5>€{price}</h5>
              </div>
              <div
                className={styles.btn_container}
                onClick={() => {
                  addToCart({
                    id,
                  });
                }}
              >
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.checkout_container}>
        Items: {totalItems}
        <br />
        Total Cost: €{subtotal}
        <br />
        <button onClick={checkout}>Check out</button>
      </div>
    </div>
  );
}
