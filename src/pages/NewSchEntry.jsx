import styles from "./NewSchEntry.module.css";

function NewSchEntry() {
  return (
    <div className={styles.container}>
      <h2 className={styles["secondary-heading"]}>
        NEW SCHOOLARSHIP FORM DATA
      </h2>
      <div className={styles["sch-form"]}>
        <form>
          <div className={styles["form-grid"]}>
            <div className={styles["fields-flex"]}>
              <div className={styles.fields}>
                <label>First Name:</label>
                <input type="text" />
              </div>
              <div className={styles.fields}>
                <label>Renewal/Fresh:</label>
                <input type="text" />
              </div>
              <div className={styles.fields}>
                <label>Date of Birth:</label>
                <input type="text" />
              </div>
              <div className={styles.fields}>
                <input type="checkbox" />
                <label>Payment Completed</label>
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.fields}>
                <label>Last Name:</label>
                <input type="text" />
              </div>
              <div className={styles.fields}>
                <label>Class:</label>
                <input type="text" />
              </div>
              <div className={styles.fields}>
                <label>Phone:</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.fields}>
                <label>Registration No:</label>
                <input type="number" />
              </div>
              <div className={styles.fields}>
                <label>Date:</label>
                <input type="text" />
              </div>
              <div className={styles.fields}>
                <label>Password:</label>
                <input type="text" />
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
