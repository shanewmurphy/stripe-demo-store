import Link from "next/link";
import styles from "./nav.module.css";
import { useCart } from "@/hooks/use-cart";

const Nav = () => {
  const { subtotal, totalItems, checkout } = useCart();
  return (
    <nav>
      <div>
        <div className={styles.container}>
          <div className={styles.links_container}>
            <ul>
              <li className={styles.logo_container}></li>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav_cart_container}>
            <ul>
              <li>Cart</li>
              <li className={styles.cart_icon} onClick={checkout}>
                <span>{totalItems}</span>
              </li>
              {/* <li>{subtotal}</li> */}
            </ul>
          </div>
          {/* <div className={styles.nav_cart_container}>
            Cart €{subtotal}
            <p>
              <span class="icon-bag_icon"></span>
              {totalItems}
            </p>
          </div> */}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
