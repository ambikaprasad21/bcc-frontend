import { useState } from "react";
import styles from "./NewSchEntry.module.css";

import SelectDate from "../components/SelectDate";

function NewSchEntry() {
  const [type, setType] = useState("Fresh");
  const [division, setDivision] = useState("Prematric");
  return (
    <div className={styles.container}>
      <h2 className={styles["secondary-heading"]}>
        NEW SCHOOLARSHIP FORM DATA
      </h2>
      <div className={styles["sch-form"]}>
        <form>
          <div className={styles["form-grid"]}>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>First Name:</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.formRow}>
                <label>Renewal/Fresh:</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={styles.input}
                >
                  <option value={"Fresh"}>Fresh</option>
                  <option value={"Renewal"}>Renewal</option>
                </select>
              </div>
              <div className={styles.formRow}>
                <label>Date of Birth:</label>
                {/* <input type="text" className={styles.input} /> */}
                <SelectDate />
              </div>
              <div className={`${styles.formRow} ${styles.payment}`}>
                <label>Payment Completed</label>
                <input type="checkbox" className={styles.input} />
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>Last Name:</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.formRow}>
                <label>Class:</label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className={styles.input}
                >
                  <option value={"Prematric"}>Prematric</option>
                  <option value={"Intermediate"}>Intermediate</option>
                  <option value={"Postmatric other than inter"}>
                    Postmatric other than inter
                  </option>
                  <option value={"Postmatric other state"}>
                    Postmatric other state
                  </option>
                </select>
              </div>
              <div className={styles.formRow}>
                <label>Phone:</label>
                <input type="text" className={styles.input} />
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>Registration No:</label>
                <input type="number" className={styles.input} />
              </div>
              <div className={styles.formRow}>
                <label>Date:</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.formRow}>
                <label>Password:</label>
                <input type="text" className={styles.input} />
              </div>
            </div>
          </div>
          <button className={styles["create-sch-entry"]}>Create</button>
        </form>
      </div>
    </div>
  );
}

export default NewSchEntry;
