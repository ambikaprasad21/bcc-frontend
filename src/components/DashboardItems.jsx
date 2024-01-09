import styles from "./DashboardItems.module.css";
import SchCard from "../schoolarship/SchCard";
import NotifiCard from "../notification/NotifiCard";
import BreakNewsCard from "../BreakingNews/BreakNewsCard";
import JobCard from "../job/JobCard";
function DashboardItems() {
  return (
    <div className={styles["dash-items"]}>
      <NotifiCard />
      <SchCard />
      <BreakNewsCard />
      <JobCard />
    </div>
  );
}

export default DashboardItems;
