import DashboardItems from "../components/DashboardItems";
import styles from "./Admin.module.css";

function Admin() {
  return (
    <div className={styles.admin}>
      <DashboardItems />
    </div>
  );
}

export default Admin;
