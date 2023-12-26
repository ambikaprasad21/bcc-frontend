import SortBy from "../schoolarship/SortBy";
import styles from "./Schoolarship.module.css";
function Schoolarship() {
  return (
    <div className={styles.container}>
      <h2 className={styles["schoolarship-heading"]}>UP SCHOOLARSHIP</h2>
      <div className={styles.schoolarship}>
        <SortBy />
      </div>
    </div>
  );
}

export default Schoolarship;
