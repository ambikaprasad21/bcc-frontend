import styles from "./NotifiPage.module.css";
import getDate from "../utils/getDate";
import getTime from "../utils/getTime";
import Spinner from "../components/Spinner";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faMessage } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useNotifi } from "../context/notifiContext";
import { useEffect } from "react";

library.add(fab, faTrashCan, faMessage);

function NotifiPage() {
  // const navigate = useNavigate();
  const { notifi, getAllNotifi, deleteNotifi, isLoading } = useNotifi();

  useEffect(() => {
    getAllNotifi();
  }, []);
  // const notifi = [
  //   {
  //     _id: 1,
  //     name: "Amit Kumar",
  //     email: "amit@email.com",
  //     date: new Date(),
  //     time: new Date().getTime(),
  //     message:
  //       "Hello from amit kumar,alskjoivjaoijoiruoianlkmlerjoija;l  ajsoiroivalk  aijoieruoiajgla aisuoriuiop alkajoiero alkajroieov aljeoir alkfjaoiwer lkalkjeirj ",
  //     read: true,
  //   },
  //   {
  //     _id: 2,
  //     name: "Amit Kumar",
  //     email: "amit@email.com",
  //     date: new Date(),
  //     time: new Date().getTime(),
  //     message: "Hello from amit kumar,",
  //     read: false,
  //   },
  //   {
  //     _id: 3,
  //     name: "Amit Kumar",
  //     email: "amit@email.com",
  //     date: new Date(),
  //     time: new Date().getTime(),
  //     message: "Hello from amit kumar,",
  //     read: false,
  //   },
  //   {
  //     _id: 4,
  //     name: "Amit Kumar",
  //     email: "amit@email.com",
  //     date: new Date(),
  //     time: new Date().getTime(),
  //     message: "Hello from amit kumar,",
  //     read: true,
  //   },
  // ];

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Spinner />
      </div>
    );
  return (
    <>
      <h2 className={styles["heading-notifi"]}>NOTIFICATIONS</h2>
      <div className={styles.container}>
        {notifi.length === 0 ? (
          <p className={styles["no-msg"]}>No Messages Found </p>
        ) : (
          <div className={styles.scrollableTable}>
            <table className={styles["notifi-table"]}>
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Read</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {notifi.map((item, index) => (
                  <tr
                    key={item._id}
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#CDFAD5" : "white",
                    }}
                  >
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{getDate(item.date)}</td>
                    <td>{getTime(item.date)}</td>
                    <td>
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/admin/dashboard/notifications/${item._id}`}
                      >
                        {item.read ? (
                          <span className={styles.seen}>Seen</span>
                        ) : (
                          <span className={styles.open}>Open</span>
                        )}
                      </Link>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className={styles.delete}
                        onClick={() => deleteNotifi(item._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default NotifiPage;
