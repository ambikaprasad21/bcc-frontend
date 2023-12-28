import { useEffect, useState } from "react";
import DashboardItems from "../components/DashboardItems";
import styles from "./Admin.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/authContext";

function Admin() {
  // const [showToastContainer, setShowToastContainer] = useState(true);
  const { showToast } = useAuth();
  useEffect(() => {
    toast.success("Login Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        fontFamily: " sans-serif",
        fontSize: "1.5rem",
        fontWeight: 500,
      },
    });
  }, []);

  return (
    <div className={styles.admin}>
      <DashboardItems />
      {showToast ? <ToastContainer /> : ""}
    </div>
  );
}

export default Admin;
