/* eslint-disable react/prop-types */

import DatePicker from "react-datepicker";
import styles from "./SelectDate.module.css";

function SelectDate({ startDate, setStartDate }) {
  return (
    <div className={styles.input}>
      <DatePicker
        showIcon
        selected={startDate}
        name="date"
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
        className={styles["date-picker"]}
      />
    </div>
  );
}

export default SelectDate;
