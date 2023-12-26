import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles["login-flex"]}>
        <div className={styles["login-img"]}>
          <img
            src="./../../images/login-page-photo.jpg"
            alt="login illustration photo"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
