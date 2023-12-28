import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faArrowRightToBracket);

import styles from "./Header.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Header() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={styles.header}>
      <Logo />
      <nav className={styles.navbar}>
        <p>HOME</p>
        <p>SERVICE</p>
        <p>CONTACT US</p>
        {isAuthenticated ? (
          <p>
            <Link
              to="/admin/dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              DASHBOARD
            </Link>
          </p>
        ) : null}
        {isAuthenticated ? (
          <p>
            <Link
              onClick={handleLogout}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              LOGOUT
            </Link>
          </p>
        ) : null}

        {isAuthenticated ? null : (
          <p>
            <Link
              to="/admin/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ADMIN LOGIN <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Link>
          </p>
        )}
      </nav>
    </div>
  );
}

export default Header;
