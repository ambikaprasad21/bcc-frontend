import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <h1>BCC</h1>
      <p className={styles["small-p"]}>Balaji computer center</p>
    </div>
  );
}

export default Logo;
