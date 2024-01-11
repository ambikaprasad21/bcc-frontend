import styles from "./SpinnerMini.module.css";

function SpinnerMini() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default SpinnerMini;
