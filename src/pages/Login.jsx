import styles from "./Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
library.add(fab, faArrowRight, faEye, faEyeSlash);

function Login() {
  const [see, setSee] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState("false");
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSee() {
    setSee((see) => !see);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        "https://bccbackend.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.body.message, {
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

        setLoading(false);
        return;
      } else {
        setIsAuthenticated(true);
      }

      // setRedirect(true);
    } catch (err) {
      console.log("There is some error try again");
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/?loginSuccess=true", { replace: true });
        //using the replace as true we are manupulating the history stack
      }
    },
    [isAuthenticated]
  );

  return (
    <div className={styles.container}>
      <div className={styles["login-flex"]}>
        <div className={styles["login-img"]}>
          <img
            src="./../../images/login-page-photo.jpg"
            alt="login illustration photo"
          />
        </div>
        <div className={styles["login-data"]}>
          <div className={styles["login-form"]}>
            <form onSubmit={handleLogin}>
              <div className={styles["form-fields"]}>
                <p className={styles.heading}>Welcome To BCC </p>

                <input
                  type="text"
                  required
                  placeholder="admin username"
                  className={styles.fields}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  type={see ? "text" : "password"}
                  required
                  placeholder="password"
                  className={styles.fields}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {loading ? (
                  <Spinner />
                ) : (
                  <button className={`${styles.fields} ${styles["login-btn"]}`}>
                    <p>Log In</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                )}
                <div onClick={handleSee} className={styles["fa-icon"]}>
                  {see ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
