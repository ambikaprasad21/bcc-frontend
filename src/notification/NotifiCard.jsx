import { Link } from "react-router-dom";
import styles from "./NotifiCard.module.css";
import { useNotifi } from "../context/notifiContext";
import { useEffect } from "react";

function NotifiCard() {
  const { getNewNotifi, open } = useNotifi();

  useEffect(() => {
    getNewNotifi();
  }, [getNewNotifi]);
  return (
    <Link
      to="/admin/dashboard/notifications"
      style={{ textDecoration: "none", color: "inherit" }}
      className={styles["card"]}
    >
      <div className={styles["item-1"]}>
        <div className={styles["dash-img"]}>
          <img src="./../../images/notifiLogo.png" alt="notifications" />
        </div>

        <div className={styles["item-text"]}>
          <p>BCC Notifications</p>
          <p>Message from contact us form</p>
        </div>
      </div>
      {open === 0 ? "" : <p className={styles["new-notifi"]}>{open}</p>}
    </Link>
  );
}

export default NotifiCard;
