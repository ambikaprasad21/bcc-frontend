import { useParams } from "react-router-dom";
import styles from "./JobItem.module.css";
import { useEffect, useState } from "react";
// import Loading from "react-loading";
import Spinner from "../components/Spinner";

// const BASE_URL = "http://127.0.0.1:3000/api/v1/job";
const BASE_URL = "https://bccbackend.onrender.com/api/v1/job";

// const jobs = [
//   {
//     heading: "up police 60000 new jobs",
//     last: "09-01-2024",
//     _id: 1,
//     detail: "uttar pradesh police bharti",
//   },
//   {
//     _id: 2,
//     heading: "up police 60000 new jobs",
//     last: "09-01-2024",
//     detail: "New indian government vaccancy",
//   },
// ];

function JobItem() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loaidng, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getJob() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}/${id}`, {
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
          setData(data.doc[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getJob();
  }, []);
  //   const jobItem = jobs.find((item) => item._id === +id);

  if (loaidng) return <Spinner />;
  if (error) return <p>{error}</p>;
  return (
    <div className={styles.container}>
      <h2>{data.heading}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.detail }} />
    </div>
  );
}

export default JobItem;
