import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faArrowRightToBracket);

import styles from "./Header.module.css";
import Logo from "./Logo";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <nav className={styles.navbar}>
        <p>HOME</p>
        <p>SERVICE</p>
        <p>CONTACT US</p>
        <p>
          ADMIN LOGIN <FontAwesomeIcon icon={faArrowRightToBracket} />
        </p>
      </nav>
    </div>
  );
}

export default Header;
