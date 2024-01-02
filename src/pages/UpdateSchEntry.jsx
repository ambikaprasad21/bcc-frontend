import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./NewSchEntry.module.css";

import SelectDate from "../components/SelectDate";
import Spinner from "../components/Spinner";
import Cancelbtn from "../components/Cancelbtn";

// const BASE_URL = "http://127.0.0.1:3000/api/v1";
const BASE_URL = "https://bccbackend.onrender.com/api/v1";

function UpdateSchEntry() {
  const { regno } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [dob, setDob] = useState(new Date());
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getEntry() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${BASE_URL}/schoolarship/getEntryByRegno/${regno}`,
          {
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          setError("Unable to get data try again");
        }
        const resData = await res.json();
        console.log(resData.data.doc[0]);
        setData(resData.data.doc[0]);
        setFirstName(resData.data.doc[0].firstname);
        setLastName(resData.data.doc[0].lastname);
        setStartDate(new Date(resData.data.doc[0].date));
        setDob(new Date(resData.data.doc[0].DOB));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getEntry();
  }, [regno]);

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "firstname" || name === "lastname") {
      value = capitalizeWords(value);
    }
    // console.log(name, value);
    setData((data) => ({ ...data, [name]: value }));
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData((data) => ({ ...data, [name]: checked }));
    setUpdatedData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      console.log(data);
      const res = await fetch(`${BASE_URL}/schoolarship/${data._id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...updatedData, date: startDate, DOB: dob }),
      });
      console.log(updatedData);
      if (!res.ok) {
        setError("There is some error uploading data try again");
      } else {
        navigate("/admin/dashboard/schoolarship");
        console.log("Schoolarship Entry updated");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles["secondary-heading"]}>
        {`UPDATE DATA FOR NAME: ${firstname} ${lastname} , REG.NO: ${regno}`}
      </h2>
      <div className={styles["sch-form"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-grid"]}>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>First Name:</label>
                <input
                  type="text"
                  required
                  name="firstname"
                  className={styles.input}
                  value={data.firstname}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className={styles.formRow}>
                <label>Renewal/Fresh:</label>
                <select
                  value={data.type}
                  required
                  name="type"
                  onChange={(e) => handleInputChange(e)}
                  className={styles.input}
                >
                  <option value={"Fresh"}>Fresh</option>
                  <option value={"Renewal"}>Renewal</option>
                </select>
              </div>

              <div className={styles.formRow}>
                <label>Amount:</label>
                <input
                  type="text"
                  required
                  name="charge"
                  className={styles.input}
                  value={data.charge}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className={styles.formRow}>
                <label>Date of Birth:</label>
                <SelectDate startDate={dob} setStartDate={setDob} />
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>Last Name:</label>
                <input
                  type="text"
                  required
                  name="lastname"
                  className={styles.input}
                  value={data.lastname}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className={styles.formRow}>
                <label>Class:</label>
                <select
                  value={data.class}
                  required
                  name="class"
                  onChange={(e) => handleInputChange(e)}
                  className={styles.input}
                >
                  <option value={"Prematric"}>Prematric</option>
                  <option value={"Intermediate"}>Intermediate</option>
                  <option value={"Postmatric other than inter"}>
                    Postmatric other than inter
                  </option>
                  <option value={"Postmatric other state"}>
                    Postmatric other state
                  </option>
                </select>
              </div>
              <div className={styles.formRow}>
                <label>Phone:</label>
                <input
                  type="text"
                  required
                  name="phone"
                  className={styles.input}
                  value={data.phone}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className={styles.formRow}>
                <label>Date:</label>
                <SelectDate startDate={startDate} setStartDate={setStartDate} />
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>Registration No:</label>
                <input
                  type="number"
                  required
                  name="registrationNo"
                  className={styles.input}
                  value={data.registrationNo}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className={styles.formRow}>
                <label>Password:</label>
                <input
                  type="text"
                  name="password"
                  className={styles.input}
                  value={data.password}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className={`${styles.formRow} ${styles.payment}`}>
                <label>Payment Completed</label>
                <input
                  type="checkbox"
                  name="paid"
                  className={`${styles.input} ${styles.checkbox}`}
                  checked={data.paid || false}
                  onChange={(e) => handleCheckboxChange(e)}
                />
              </div>
            </div>
          </div>
          {error ? <span>{error}</span> : ""}
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Cancelbtn />
              <button className={styles["create-sch-entry"]}>Update</button>
            </>
          )}
        </form>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default UpdateSchEntry;
