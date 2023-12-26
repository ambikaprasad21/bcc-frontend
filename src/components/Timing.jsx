import styles from "./Timing.module.css";

function Timing() {
  return (
    <div className={styles.container}>
      <div className={styles["fixed-bg-img"]}>
        <img
          src="./../../images/timing-background.jpg"
          alt="timing background"
        />
      </div>
      <div className={styles.more}>
        <div className={styles["more-text"]}>
          <h2>More About BCC CAFE</h2>
          <p>
            A <span>CSC (common service center) </span> center, all government
            form are filled here. All Government card are made here.
          </p>
        </div>
        <div className={styles["more-timing"]}>
          <div className={styles.condition}>
            <p>Open Time</p>
            <span>10:00 AM</span>
          </div>
          <div className={styles.condition}>
            <p>Close Time</p>
            <span>09:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timing;
