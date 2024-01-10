import { Link } from "react-router-dom";
import DataTable from "../schoolarship/DataTable";
import SortBy from "../schoolarship/SortBy";
import styles from "./Schoolarship.module.css";
import { SchProvider } from "../context/SchContext";

function Schoolarship() {
  return (
    <SchProvider>
      <div className={styles.container}>
        <h2 className={styles["schoolarship-heading"]}>UP SCHOOLARSHIP</h2>
        <div className={styles.schoolarship}>
          <SortBy />
          <DataTable />
          <Link
            to="/admin/dashboard/create/schoolarship"
            style={{ textDecoration: "none" }}
            className={styles["btn-create"]}
          >
            Create New Entry
          </Link>
        </div>
      </div>
    </SchProvider>
  );
}

export default Schoolarship;
