import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/productPage.module.css";

export default function ProductsinglePage() {
  const id = "productId";
  const title = "Harlow";
  const description = "3 Seater Sofa, Saffron Recycled Velvet";
  const price = "1,700";
  const image =
    "https://res.cloudinary.com/dkhchcvwy/image/upload/v1662458773/Stripe-Demo-Store/Prod_Imge_03_cwj6q7.png";
  const thumbnail =
    "https://res.cloudinary.com/dkhchcvwy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1662458773/Stripe-Demo-Store/Prod_Imge_03_cwj6q7.png";

  return (
    <div>
      <Head>
        <title>Stripe Demo Store</title>
        <meta name="description" content="Products Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.product_images_container}>
          <div>
            <Image
              src="/prod_img_large.png"
              width={732}
              height={390}
              alt="product Image"
            />
          </div>
        </div>
        <div className={styles.product_content_container}>
          <h3>{title}</h3>
          <h4>€{price}</h4>
          <p>{description}</p>
          <div className={styles.btns_container_row}>
            <div>
              <button>qty</button>
            </div>
            <div>
              <button className={styles.addCart_btn}>Add to Cart</button>
            </div>
            <div>
              <button className={styles.btn_buyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.product_details_container}>
        <div className={styles.tab_links}>
          <ul>
            <li>Description</li>
            <li>Delivery & Returns</li>
            <li>Reviews</li>
          </ul>
          <div>
            <p>
              Designed by Hans J. Wegner in 1949 as one of the first models
              created especially for Carl Hansen & Son, and produced since 1950.
              The last of a series of chairs Wegner designed based on
              inspiration from antique Chinese armchairs. The gently rounded top
              together with the back and seat offers a variety of comfortable
              seating positions, ideal for both long visits to the dining table
              and relaxed lounging.
            </p>
            <p>
              The top that goes with everything. Sleek and simple, this
              sleeveless shell has a relaxed fit and classic round neckline.
              Plus—it’s made of our eco-conscious Clean Silk, for more beauty
              and less waste. Here’s how.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.related_title}>
        <h5>Related Products</h5>
      </div>
      <div className={styles.related_products_container}>
        <div className={styles.related_item}>
          <div className={styles.related_imgs_container}>
            <Image
              src="/related_product_img.png"
              width={420}
              height={297}
              alt="product Image"
            />
          </div>
          <h5>Alex lounge chair</h5>
          <h6>€525</h6>
        </div>
        <div className={styles.related_item}>
          <div className={styles.related_imgs_container}>
            <Image
              src="/related_product_img.png"
              width={420}
              height={297}
              alt="product Image"
            />
          </div>
          <h5>Wicked lounge rattan</h5>
          <h6>€825</h6>
        </div>
        <div className={styles.related_item}>
          <div className={styles.related_imgs_container}>
            <Image
              src="/related_product_img.png"
              width={420}
              height={297}
              alt="product Image"
            />
          </div>
          <h5>Alex lounge chair</h5>
          <h6>€525</h6>
        </div>
      </div>
    </div>
  );
}
