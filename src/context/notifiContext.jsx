import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const NotifiContext = createContext();

// const BASE_URL = "http://127.0.0.1:3000/api/v1/notification";
const BASE_URL = "https://bccbackend.onrender.com/api/v1/notification";

function NotifiProvider({ children }) {
  const [notifi, setNotifi] = useState([]);
  const [open, setOpen] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [notifiItem, setNotifiItem] = useState({});

  async function getNewNotifi() {
    const res = await fetch(`${BASE_URL}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "applicatoin/json",
      },
    });
    const resData = await res.json();
    const count = resData.data.msg.reduce((acc, item) => {
      if (!item.read) {
        return acc + 1;
      }
      return acc;
    }, 0);

    setOpen(count);
  }

  async function getAllNotifi() {
    try {
      setIsloading(true);
      setNotifiItem({});
      const res = await fetch(`${BASE_URL}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "applicatoin/json",
        },
      });
      if (!res.ok) {
        setError("There was some Error getting notification try again");
        setIsloading(false);
        return;
      } else {
        const resData = await res.json();
        setNotifi(resData.data.msg);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  }

  async function deleteNotifi(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notification?"
    );
    if (confirmDelete) {
      try {
        setIsloading(true);
        setError("");
        const res = await fetch(`${BASE_URL}/${id}`, {
          credentials: "include",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          toast.error("Some Error Occurred", {
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
          setIsloading(false);
          setError("");
          return;
        } else {
          toast.success("Deleted Successfully", {
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
          const updatedNotifi = notifi.filter((item) => item._id !== id);
          setNotifi(updatedNotifi);
        }
      } catch (err) {
        setError("Some Error occurred Deleting Data");
      } finally {
        setIsloading(false);
      }
    }
  }

  async function getNotifiById(id) {
    try {
      setIsloading(true);
      setError("");
      const res = await fetch(`${BASE_URL}/${id}`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        setError("Some Error occured getting notification");
        setIsloading(false);
        return;
      } else {
        await fetch(`${BASE_URL}/${id}`, {
          method: "PATCH",
          credentials: "include",
          body: JSON.stringify({ read: true }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const resData = await res.json();
        setNotifiItem(resData.data.msg);
        setIsloading(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <NotifiContext.Provider
      value={{
        notifi,
        open,
        notifiItem,
        isLoading,
        getAllNotifi,
        error,
        deleteNotifi,
        getNotifiById,
        getNewNotifi,
      }}
    >
      <>
        {children}
        <ToastContainer />
      </>
    </NotifiContext.Provider>
  );
}

function useNotifi() {
  const context = useContext(NotifiContext);
  if (context === undefined) {
    throw new Error("SchContext was used outside the SchProvider");
  }
  return context;
}

export { NotifiProvider, useNotifi };
