import { useNavigate } from "react-router-dom";
import styles from "./Cancelbtn.module.css";

function Cancelbtn() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <button className={styles["cancel-sch-entry"]} onClick={handleCancel}>
      Cancel
    </button>
  );
}

export default Cancelbtn;
