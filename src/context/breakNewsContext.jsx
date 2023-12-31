import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const BreakNewsContext = createContext();

// const BASE_URL = "http://127.0.0.1:3000/api/v1/breaking/news";
const BASE_URL = "https://bccbackend.onrender.com/api/v1/breaking/news";
function BreakNewsProvider({ children }) {
  const [breakNews, setBreakingNews] = useState([]);

  async function getBreakNews() {
    try {
      const res = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("some error occured getting news");
      } else {
        const resData = await res.json();
        setBreakingNews(resData.data.news);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async function createBreakNews(data) {
    try {
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ news: data }),
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
      } else {
        toast.success("successfully created", {
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
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteBreakNews(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notification?"
    );
    if (confirmDelete) {
      try {
        const res = await fetch(`${BASE_URL}/${id}`, {
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
        } else {
          const updatedData = breakNews.filter((item) => item._id !== id);
          setBreakingNews(updatedData);
          toast.success("successfully deleted", {
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
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <BreakNewsContext.Provider
      value={{ breakNews, getBreakNews, createBreakNews, deleteBreakNews }}
    >
      <ToastContainer />
      {children}
    </BreakNewsContext.Provider>
  );
}

function useBreakNews() {
  const context = useContext(BreakNewsContext);
  if (context === undefined) {
    throw new Error("BreakNews was use outside the breaknewsprovider");
  }
  return context;
}

export { BreakNewsProvider, useBreakNews };
