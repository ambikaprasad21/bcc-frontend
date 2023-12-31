import { useParams } from "react-router-dom";
import styles from "./NotifiItem.module.css";
import { useNotifi } from "../context/notifiContext";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

function NotifiItem() {
  const { id } = useParams();

  const { notifiItem, getNotifiById, isLoading } = useNotifi();

  useEffect(() => {
    getNotifiById(id);
  }, []);
  if (!notifiItem) return;
  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Spinner />
        </div>
      ) : (
        <div className={styles["notifi-item"]}>
          <h2 className={styles.heading}>Message From: ${notifiItem.name}</h2>
          <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.header}>
                <p>
                  <span className={styles["label"]}>Name:</span>
                  <span className={styles["value"]}>{notifiItem.name}</span>
                </p>
                <p>
                  <span className={styles["label"]}>Email:</span>
                  <span className={styles["value"]}>{notifiItem.email} </span>
                </p>
              </div>
              <div className={styles.message}>
                <p>
                  <span className={styles["label"]}>Message:</span>
                  <span className={styles["value"]}> {notifiItem.message}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NotifiItem;
