import styles from "./hero.module.css";

export default function heroSection() {
  return (
    <div className={styles.container}>
      <h1>
        Blueclay Series for <br /> Normann Copenhagen
      </h1>
      <h4>
        From <span>€200</span>
      </h4>
    </div>
  );
}
