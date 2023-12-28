import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faMagnifyingGlass);

import styles from "./SortBy.module.css";
import { useSch } from "../context/SchContext";
import { useState } from "react";
function SortBy() {
  const { getSortedData, searchByName, searshByRegno } = useSch();

  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <p className={styles["sort-label"]}>Sort By:</p>
        <div className={styles["sort-ways"]}>
          <p onClick={() => getSortedData(0)}>Date</p>
          <p onClick={() => getSortedData(1)}>Fresh</p>
          <p onClick={() => getSortedData(2)}>Renewal</p>
          <p onClick={() => getSortedData(3)}>Payment</p>
        </div>
      </div>
      <div className={styles["search"]}>
        <div className={styles["search-area"]}>
          <p>Search Entry By Name: </p>
          <div className={styles["input-icon"]}>
            <input
              type="text"
              className={styles["find"]}
              value={name}
              onChange={(e) => {
                const lowercaseValue = e.target.value
                  ? e.target.value.toLocaleLowerCase()
                  : "";
                console.log(lowercaseValue);
                setName(lowercaseValue);
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles["search-icon"]}
              onClick={() => {
                searchByName(name);
                setName("");
              }}
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
              value={regno}
              onChange={(e) => {
                setRegno(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles["search-icon"]}
              onClick={() => {
                searshByRegno(regno);
                setRegno("");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
