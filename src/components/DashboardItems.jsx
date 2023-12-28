import { Link } from "react-router-dom";
import styles from "./DashboardItems.module.css";
function DashboardItems() {
  return (
    <div className={styles["dash-items"]}>
      <Link
        to="/admin/dashboard/schoolarship"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={styles["item-1"]}>
          <div className={styles["dash-img"]}>
            <img src="./../../images/uplogo.jpg" alt="up schoolarship" />
          </div>

          <div className={styles["item-text"]}>
            <p>UP SCHOOLARSHIP</p>
            <p>Up Schoolarship Form Filling Data</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DashboardItems;
