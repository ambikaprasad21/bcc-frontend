import { Link } from "react-router-dom";
import styles from "./BreakNewsCard.module.css";

function BreakNewsCard() {
  return (
    <Link
      to="/admin/dashboard/breaking/news"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles["item-1"]}>
        <div className={styles["dash-img"]}>
          <img
            src="./../../images/loud-speaker.png"
            alt="breaking news speaker"
          />
        </div>

        <div className={styles["item-text"]}>
          <p>Top News</p>
          <p>Get all Top news or update/delete top news</p>
        </div>
      </div>
    </Link>
  );
}

export default BreakNewsCard;
