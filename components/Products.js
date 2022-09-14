import styles from "./products.module.css";

import products from "../data/products";

export default function productList() {
  return (
    <div className={styles.products_grid_container}>
      <div className={styles.product_card}></div>
    </div>
  );
}
