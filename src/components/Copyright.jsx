import styles from "./Copyright.module.css";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.copyright}>
      <p>{`copyright@${currentYear}. All right reserved`}</p>
    </div>
  );
}

export default Copyright;
