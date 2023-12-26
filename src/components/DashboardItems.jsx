import styles from "./DashboardItems.module.css";
function DashboardItems() {
  return (
    <div className={styles["dash-items"]}>
      <div className={styles["item-1"]}>
        <img src="./../../images/uplogo.jpg" alt="up schoolarship" />

        <div>
          <p>UP SCHOOLARSHIP</p>
          <p>Up Schoolarship Form Data</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardItems;
