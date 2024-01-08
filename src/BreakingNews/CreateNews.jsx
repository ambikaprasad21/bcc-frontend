import { useNavigate } from "react-router-dom";
import styles from "./CreateNews.module.css";
import { useBreakNews } from "../context/breakNewsContext";
import { useState } from "react";

function CreateNews() {
  const navigate = useNavigate();
  const [news, setNews] = useState("");
  const [link, setLink] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { createBreakNews, getBreakNews } = useBreakNews();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBreakNews({ news, link });
    getBreakNews();
    setRedirect(true);
  };

  if (redirect) navigate("/admin/dashboard/breaking/news");
  return (
    <div className={styles.container}>
      <h2>Create New News</h2>
      <div className={styles["new-news"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles.data}>
            <label className={styles.label}>Enter News:</label>
            <textarea
              type="text"
              className={styles.input}
              cols="40"
              rows="5"
              value={news}
              onChange={(e) => setNews(e.target.value)}
            />
          </div>
          <div className={styles.data}>
            <label className={styles.label}>Enter Link:</label>
            <textarea
              type="text"
              className={styles.input}
              cols="40"
              rows="2"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <button className={`${styles.btn} ${styles.create}`}>Create</button>
        </form>
        <button
          onClick={handleCancel}
          className={`${styles.btn} ${styles.cancel}`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateNews;
