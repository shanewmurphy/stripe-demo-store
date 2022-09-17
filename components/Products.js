import { useState } from "react";
import styles from "./products.module.css";
import Image from "next/image";

import { initiateCheckout } from "lib/payments";
import products from "@/data/products.json";

const defaultCart = {
  products: {},
};

export default function Productlist() {
  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerItem: product.price,
    };
  });

  // calculate subtotal of items
  const subtotal = cartItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  console.log("subtotal", subtotal);

  const totalItems = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id } = {}) {
    updateCart((prev) => {
      let cartState = { ...prev };

      if (cartState.products[id]) {
        cartState.products[id].quantity = cartState.products[id].quantity + 1;
      } else {
        cartState.products[id] = {
          id,
          quantity: 1,
        };
      }
      return cartState;
    });
  }
  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map((item) => {
        return {
          price: item.id,
          quantity: item.quantity,
        };
      }),
    });
  }
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
