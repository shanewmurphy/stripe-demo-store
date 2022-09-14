import styles from "./products.module.css";
import Image from "next/image";

import { initiateCheckout } from "lib/payments";

import products from "../data/products";

export default function productList() {
  return (
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
              <h5>{price}</h5>
            </div>
            <div
              className={styles.btn_container}
              onClick={() => {
                initiateCheckout({
                  lineItems: [
                    {
                      price: id,
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              <button>Buy Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
