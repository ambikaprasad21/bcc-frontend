import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

library.add(fab, faArrowRightToBracket);

import styles from "./Header.module.css";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";

const BASE_URL = "https://bccbackend.onrender.com/api/v1/auth/getloggedinuser";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, isAuthenticated, setIsAuthenticated, setContactForm } =
    useAuth();

  const navigate = useNavigate();
  // const [clicked, setClicked] = useState(false);

  useEffect(() => {
    async function getLoggedInUser() {
      const res = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: {
            fontFamily: " sans-serif",
            fontSize: "1.5rem",
            fontWeight: 500,
          },
        });
        setIsAuthenticated(null);
        localStorage.removeItem("authToken");
        navigate("/", { replace: true });
      }
    }

    if (token) {
      getLoggedInUser();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
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
