import { useEffect, useState } from "react";
import styles from "./DataTable.module.css";
import { useSch } from "../context/SchContext";
import Spinner from "../components/Spinner";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPenToSquare, faTrashCan);

function DataTable() {
  const [data, setData] = useState({
    // heading: "Data table",
    // doc: [
    //   {
    //     _id: 1,
    //     firstname: "amit",
    //     lastname: "kumar",
    //     registrationNo: 45789212364896,
    //     type: "renewal",
    //     paid: true,
    //     charge: 50,
    //     date: "2023-12-25T00:00:00.000Z",
    //     DOB: "2003-11-05T00:00:00.000Z",
    //     class: "intermediate",
    //     phone: 1245789632,
    //     password: "test@1234",
    //   },
    //   {
    //     _id: 2,
    //     firstname: "prem",
    //     lastname: "kumar",
    //     registrationNo: 5212364998522,
    //     type: "fresh",
    //     paid: false,
    //     charge: 50,
    //     date: "2023-12-30T00:00:00.000Z",
    //     DOB: "2003-11-05T00:00:00.000Z",
    //     class: "intermediate",
    //     phone: 1245789632,
    //     password: "test@1234",
    //   },
    // ],
  });
  const { schData, isLoading, deleteEntry } = useSch();

  // useEffect(() => {
  //   getSchData();
  // }, []);

  // console.log(schData);

  function getDate(date) {
    const apiDate = new Date(date);
    const day = apiDate.getDate().toString().padStart(2, "0");
    const month = (apiDate.getMonth() + 1).toString().padStart(2, "0");
    const year = apiDate.getFullYear();
    const formatedDate = `${day}-${month}-${year}`;
    return formatedDate;
  }
  // if (!schData) return <Spinner />;
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.container}>
      <h2>{schData.heading}</h2>
      <table>
        {schData.doc ? (
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Registration Number</th>
              <th>Renewal / Fresh</th>
              <th>Class</th>
              <th>DOB</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Money</th>
              <th>Payment</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
        ) : (
          ""
        )}

        <tbody>
          {schData.doc?.map((item, index) => (
            <tr
              key={item._id}
              style={{ backgroundColor: index % 2 !== 0 ? "#CDFAD5" : "white" }}
            >
              <td>{index + 1}</td>
              <td>{`${item.firstname} ${item.lastname}`}</td>
              <td>{item.registrationNo}</td>
              <td>{item.type}</td>
              <td>{item.class}</td>
              <td>{getDate(item.DOB)}</td>
              <td>{getDate(item.date)}</td>
              <td>{item.phone}</td>
              <td>{item.charge}</td>
              <td>{item.paid ? "Yes" : "No"}</td>
              <td>{item.password}</td>
              <td className={styles["operation"]}>
                <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} />
              </td>
              <td
                className={styles["operation"]}
                onClick={() => deleteEntry(item._id)}
              >
                {isLoading ? (
                  <Spinner />
                ) : (
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={styles.delete}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
