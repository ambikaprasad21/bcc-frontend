/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./MoveStuffAround.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function MoveStuffAround({ news }) {
  const [animDuration, setAnimeDuration] = useState(0);
  useEffect(() => {
    setAnimeDuration(news.length % 8);
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
            <Link
              to={item.link}
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit" /* Inherit color from the parent */,
                cursor: "pointer",
              }}
            >
              <p>{item.news}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoveStuffAround;
