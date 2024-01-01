/* eslint-disable react/prop-types */
import styles from "./MoveStuffAround.module.css";

function MoveStuffAround({ news }) {
  if (news.length === 0) return <p></p>;
  return (
    <div className={styles["breaking-news-ticker"]}>
      <div className={styles["ticker-content"]}>
        {news.map((item, index) => (
          <div key={index} className={styles["news-item"]}>
            <p>{item.news}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoveStuffAround;
