import { useEffect, useState } from "react";
import DashboardItems from "../components/DashboardItems";
import styles from "./Admin.module.css";
import { ToastContainer, toast } from "react-toastify";

import { useSearchParams } from "react-router-dom";

function Admin() {
  // const [showToastContainer, setShowToastContainer] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const loginSuccess = searchParams.get("loginSuccess");
    if (loginSuccess) {
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
    }

    setSearchParams({});
  }, [searchParams]);

  return (
    <>
      <h2 className={styles["heading"]}>ADMIN DASHBOARD</h2>
      <div className={styles.admin}>
        <DashboardItems />
        <ToastContainer className={styles["toast-container"]} />
      </div>
    </>
  );
}

export default Admin;
