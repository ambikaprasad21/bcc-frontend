import styles from "./DashboardItems.module.css";
import SchCard from "../schoolarship/SchCard";
import NotifiCard from "../notification/NotifiCard";
import BreakNewsCard from "../BreakingNews/BreakNewsCard";
function DashboardItems() {
  return (
    <div className={styles["dash-items"]}>
      <NotifiCard />
      <SchCard />
      <BreakNewsCard />
    </div>
  );
}

export default DashboardItems;
