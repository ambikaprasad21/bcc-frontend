/* eslint-disable react/prop-types */
import styles from "./ScrollToContact.module.css";

import { Link as ScrollLink } from "react-scroll";

function ScrollToContact({ setContactForm }) {
  return (
    <ScrollLink
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      onClick={() => setContactForm(true)}
    >
      <button className={styles["service-btn"]}>Connect</button>
    </ScrollLink>
  );
}

export default ScrollToContact;
