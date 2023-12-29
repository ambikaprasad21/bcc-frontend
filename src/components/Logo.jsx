import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link
      to={"/"}
      style={{
        textDecoration: "none",
        color: "inherit" /* Inherit color from the parent */,
        cursor: "pointer",
      }}
    >
      <div className={styles.logo}>
        <h1>BCC</h1>
        <p className={styles["small-p"]}>Balaji computer center</p>
      </div>
    </Link>
  );
}

export default Logo;
