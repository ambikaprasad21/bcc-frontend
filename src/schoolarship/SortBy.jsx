import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faMagnifyingGlass);

import styles from "./SortBy.module.css";
function SortBy() {
  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <p className={styles["sort-label"]}>Sort By:</p>
        <div className={styles["sort-ways"]}>
          <p>Date</p>
          <p>Fresh</p>
          <p>Renewal</p>
          <p>Payment</p>
        </div>
      </div>
      <div className={styles["search"]}>
        <div className={styles["search-area"]}>
          <p>Search Entry By Name: </p>
          <div className={styles["input-icon"]}>
            <input type="text" className={styles["find"]} />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles["search-icon"]}
            />
          </div>
        </div>
        <div className={styles["search-area"]}>
          <p>Search Entry By Reg.No:</p>
          <div className={styles["input-icon"]}>
            <input
              type="text"
              pattern="\d*"
              inputMode="numeric"
              className={`${styles.find} ${styles["find-reg"]}`}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles["search-icon"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
