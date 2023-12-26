import styles from "./Repair.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPhoneVolume);
function Repair() {
  return (
    <div className={styles.container}>
      <div className={styles.repair}>
        <h2>Computer Repair And Servicing</h2>
        <p className={styles["repair-p"]}>
          We provide computer repair, service of old computer, windows
          installation. Get in touch for any
          <br /> online offline work of computers.
        </p>
        <button className={styles["connect-btn"]}>Contact Us</button>
        <p className={styles.contact}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.phone} />
          +91 8090015182
        </p>
      </div>
    </div>
  );
}

export default Repair;
