import { Link } from "react-router-dom";
import styles from "./JobCard.module.css";

function JobCard() {
  return (
    <Link
      to="create/new/job/notification"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles["item-1"]}>
        <div className={styles["dash-img"]}>
          <img src="./../../images/new_job.jpg" alt="indian government job" />
        </div>

        <div className={styles["item-text"]}>
          <p>Government Job</p>
          <p>Create new job information</p>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
