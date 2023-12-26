import styles from "./DashboardItems.module.css";
function DashboardItems() {
  return (
    <div className={styles["dash-items"]}>
      <div className={styles["item-1"]}>
        <div className={styles["dash-img"]}>
          <img src="./../../images/uplogo.jpg" alt="up schoolarship" />
        </div>

        <div className={styles["item-text"]}>
          <p>UP SCHOOLARSHIP</p>
          <p>Up Schoolarship Form Filling Data</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardItems;
