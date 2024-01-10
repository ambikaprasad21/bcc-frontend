import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import styles from "./JobPage.module.css";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import getDate from "../utils/getDate";

library.add(fab, faTrashCan);

// const BASE_URL = "http://127.0.0.1:3000/api/v1/job";
const BASE_URL = "https://bccbackend.onrender.com/api/v1/job";

function JobPage() {
  const { isAuthenticated } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loaidng, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getAllJob() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          setIsLoading(false);
          setError("Error Getting data, Please Try again");
          return;
        } else {
          const data = await res.json();
          setJobs(data.doc);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAllJob();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setJobs((prevData) => {
      const updatedData = prevData.filter((entry) => entry._id !== id);
      return updatedData;
    });
  };
  if (loaidng) return <Spinner />;
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {error ? (
          <p>{error}</p>
        ) : (
          jobs.map((item, index) => (
            <div key={index} className={styles["job-card"]}>
              <div className={styles.info}>
                <p>{item.heading}</p>
                <p className={styles.date}>{getDate(item.date)}</p>
              </div>

              <div>
                <KnowMore id={item.slug} />
                {isAuthenticated ? (
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={styles.delete}
                    onClick={() => handleDelete(item._id)}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        )}
        {jobs.length === 0 && (
          <p className={styles["no-job"]}>
            There is no latest notification from Admin🫸
          </p>
        )}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function KnowMore({ id }) {
  return (
    <Link
      to={`/new/job/${id}`}
      style={{
        textDecoration: "none",
      }}
      className={styles.more}
    >
      More Details
    </Link>
  );
}

export default JobPage;
