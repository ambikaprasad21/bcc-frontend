import DashboardItems from "../components/DashboardItems";
import styles from "./Admin.module.css";

function Admin() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles["heading"]}>ADMIN DASHBOARD</h2>
        <div className={styles.admin}>
          <DashboardItems />
        </div>
      </div>
    </>
  );
}

export default Admin;
