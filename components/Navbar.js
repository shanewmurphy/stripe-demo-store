import styles from "./nav.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
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
        <div className={styles.nav_cart_container}>Cart</div>
      </div>
    </div>
  );
}
