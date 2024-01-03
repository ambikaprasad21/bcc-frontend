import { useBreakNews } from "../context/breakNewsContext";
import styles from "./BreakingNewsPage.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

library.add(fab, faTrashCan);

function BreakingNewsPage() {
  const { breakNews, deleteBreakNews, getBreakNews } = useBreakNews();

  useEffect(() => {
    getBreakNews();
  }, []);
  return (
    <div>
      <h2 className={styles["top-news"]}>TOP NEWS</h2>
      <div className={styles.container}>
        <div>
          <Link
            to="/admin/dashboard/breaking/news/create"
            style={{ textDecoration: "none" }}
            className={styles["create"]}
          >
            Create News
          </Link>
        </div>
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>News</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {breakNews.map((item, index) => (
                <tr
                  key={item._id}
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#CDFAD5" : "white",
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{item.news}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className={styles.delete}
                      onClick={() => deleteBreakNews(item._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BreakingNewsPage;
