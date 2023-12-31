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

import ScrollToContact from "./ScrollToContact";
import { useAuth } from "../context/authContext";

function Services() {
  const { setContactForm } = useAuth();
  return (
    <div id="service" className={styles.services}>
      <h2>Services We Provide</h2>
      <div className={styles["service-list"]}>
        <div className={styles["service-item"]}>
          <FontAwesomeIcon icon={faFileInvoice} className={styles.icon} />
          <h3>Schoolarship Form Filling</h3>
          <p>All type of schoolarship forms are filled (fresh, renewal)</p>
          <ScrollToContact setContactForm={setContactForm} />
        </div>
        <div className={styles["service-item"]}>
          <FontAwesomeIcon icon={faKeyboard} className={styles.icon} />
          <h3>Typing Work</h3>
          <p>
            We do English typing work. Online or offline both typing work are
            done here.
          </p>
          <ScrollToContact setContactForm={setContactForm} />
        </div>
        <div className={styles["service-item"]}>
          <FontAwesomeIcon icon={faServer} className={styles.icon} />
          <h3>Data Entry</h3>
          <p>We do data entry work. Complete knoweldge of MS Excel </p>
          <ScrollToContact setContactForm={setContactForm} />
        </div>
      </div>
    </div>
  );
}

export default Services;
