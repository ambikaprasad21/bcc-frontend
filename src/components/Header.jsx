import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faArrowRightToBracket);

import styles from "./Header.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../context/authContext";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated, setContactForm } = useAuth();
  // const [clicked, setClicked] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.header}>
      <Logo />
      <nav
        className={`${styles.menu} ${
          isMenuOpen ? styles.active : styles.deactivate
        }`}
        onClick={closeMenu}
      >
        <p>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            HOME
          </Link>
        </p>
        <p>
          <Link
            to="/new/job"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            JOBS
          </Link>
        </p>
        <p>
          <ScrollLink
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            SERVICES
          </ScrollLink>
        </p>
        <p>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-1}
            duration={500}
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsMenuOpen(false);
              setContactForm(true);
            }}
          >
            CONTACT US
          </ScrollLink>
        </p>
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
      <div className={styles["mobile"]} onClick={toggleMenu}>
        <i id="bar" className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
}

export default Header;
