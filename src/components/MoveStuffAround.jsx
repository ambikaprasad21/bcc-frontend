/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./MoveStuffAround.module.css";
import { useEffect } from "react";

function MoveStuffAround({ news }) {
  const [animDuration, setAnimeDuration] = useState(0);
  useEffect(() => {
    setAnimeDuration(news.length % 10);
  }, [news]);
  if (news.length === 0) return "";
  return (
    <div className={styles["breaking-news-ticker"]}>
      <div
        className={styles["ticker-content"]}
        style={{ animationDuration: `${animDuration}s` }}
      >
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
