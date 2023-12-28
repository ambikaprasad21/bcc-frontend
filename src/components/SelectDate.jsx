import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./SelectDate.module.css";

function SelectDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.input}>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={15}
        showMonthDropdown
        className={styles["date-picker"]}
      />
    </div>
  );
}

export default SelectDate;
