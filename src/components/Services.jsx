import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faKeyboard,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFileInvoice, faKeyboard, faServer);
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.services}>
      <h2>Services We Provide</h2>
      <div className={styles["service-list"]}>
        <div className={styles["service-item"]}>
          <FontAwesomeIcon icon={faFileInvoice} className={styles.icon} />
          <h3>Schoolarship Form Filling</h3>
          <p>All type of schoolarship forms are filled (fresh, renewal)</p>
          <button className={styles["service-btn"]}>Connect</button>
        </div>
        <div className={styles["service-item"]}>
          <FontAwesomeIcon icon={faKeyboard} className={styles.icon} />
          <h3>Typing Work</h3>
          <p>
            We do English typing work. Online or offline both typing work are
            done here.
          </p>
          <button className={styles["service-btn"]}>Connect</button>
        </div>
        <div className={styles["service-item"]}>
          <FontAwesomeIcon icon={faServer} className={styles.icon} />
          <h3>Data Entry</h3>
          <p>We do data entry work. Complete knoweldge of MS Excel </p>
          <button className={styles["service-btn"]}>Connect</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
