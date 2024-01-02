import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NewSchEntry.module.css";

import SelectDate from "../components/SelectDate";
import Spinner from "../components/Spinner";
import Cancelbtn from "../components/Cancelbtn";

// const BASE_URL = "http://127.0.0.1:3000/api/v1/schoolarship";
const BASE_URL = "https://bccbackend.onrender.com/api/v1/schoolarship";

function NewSchEntry() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState(new Date());
  const [type, setType] = useState("Fresh");
  const [division, setDivision] = useState("Prematric");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [regno, setRegno] = useState("");

  const [payment, setPayment] = useState(false);
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          registrationNo: regno,
          type,
          paid: payment,
          charge: amount,
          date,
          DOB: dob,
          class: division,
          phone,
          password,
        }),
      });
      if (!res.ok) {
        setError("There is some error uploading data try again");
      } else {
        navigate("/admin/dashboard/schoolarship");
        console.log("Schoolarship Entry created");
      }
    } catch (err) {
      if (err.message) {
        setError(err.message);
      }
      setError("Some Error Occured 🔥, Please Try Again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles["secondary-heading"]}>
        NEW SCHOOLARSHIP FORM DATA
      </h2>
      <div className={styles["sch-form"]}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles["form-grid"]}>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>First Name:</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  value={firstName}
                  onChange={(e) => {
                    const capitalizedFullName = capitalizeWords(e.target.value);
                    setFirstName(capitalizedFullName);
                  }}
                />
              </div>
              <div className={styles.formRow}>
                <label>Last Name:</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  value={lastName}
                  onChange={(e) => {
                    const capitalizedFullName = capitalizeWords(e.target.value);
                    setLastName(capitalizedFullName);
                  }}
                />
              </div>

              <div className={styles.formRow}>
                <label>Amount:</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
              <div className={styles.formRow}>
                <label>Date of Birth:</label>
                <SelectDate startDate={dob} setStartDate={setDob} />
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>Renewal/Fresh:</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={styles.input}
                >
                  <option value={"Fresh"}>Fresh</option>
                  <option value={"Renewal"}>Renewal</option>
                </select>
              </div>
              <div className={styles.formRow}>
                <label>Class:</label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
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
                  className={styles.input}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className={styles.formRow}>
                <label>Date:</label>
                <SelectDate startDate={date} setStartDate={setDate} />
              </div>
            </div>
            <div className={styles["fields-flex"]}>
              <div className={styles.formRow}>
                <label>Registration No:</label>
                <input
                  type="number"
                  required
                  className={styles.input}
                  value={regno}
                  onChange={(e) => setRegno(e.target.value)}
                />
              </div>

              <div className={styles.formRow}>
                <label>Password:</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className={`${styles.formRow} ${styles.payment}`}>
                <label>Payment Completed</label>
                <input
                  type="checkbox"
                  className={`${styles.input} ${styles.checkbox}`}
                  value="payment"
                  checked={payment}
                  onChange={() => setPayment(!payment)}
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
              <button className={styles["create-sch-entry"]}>Create</button>
            </>
          )}
        </form>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default NewSchEntry;
