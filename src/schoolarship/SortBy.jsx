import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faMagnifyingGlass);

import styles from "./SortBy.module.css";
import { useSch } from "../context/SchContext";
import { useEffect, useState } from "react";
function SortBy() {
  const { getSortedData, searchByName, searshByRegno } = useSch();
  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
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
          {windowWidth > 491 ? <p>Search Entry By Name: </p> : null}
          <div className={styles["input-icon"]}>
            <input
              type="text"
              className={styles["find"]}
              placeholder={windowWidth <= 491 ? "Search Entry By Name" : ""}
              value={name}
              onChange={(e) => {
                // const lowercaseValue = e.target.value
                //   ? e.target.value.toLocaleLowerCase()
                //   : "";
                // console.log(lowercaseValue);
                setName(capitalizeWords(e.target.value));
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
          {windowWidth > 491 ? <p>Search Entry By Reg.No: </p> : null}
          <div className={styles["input-icon"]}>
            <input
              type="text"
              pattern="\d*"
              placeholder={windowWidth <= 491 ? "Search Entry By Reg.No" : ""}
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
