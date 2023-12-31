/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const SchContext = createContext();

const BASE_URL = "http://127.0.0.1:3000/api/v1";

function SchProvider({ children }) {
  const [schData, setSchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getSchData() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/schoolarship`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        setError("There was some Error Getting Data. Please Try again");
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      setSchData(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    getSchData();
  }, []);

  async function getSortedData(index) {
    const sortWays = ["date", "fresh", "renewal", "payment"];
    const sortBy = sortWays[index];
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/schoolarship/sort-by-${sortBy}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    setSchData(data.data);
    setIsLoading(false);
  }

  async function searchByName(name) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/schoolarship/getEntryByName/${name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      setSchData(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function searshByRegno(regno) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${BASE_URL}/schoolarship/getEntryByRegno/${regno}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      setSchData(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteEntry(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (confirmDelete) {
      try {
        setIsLoading(true);
        await fetch(`${BASE_URL}/schoolarship/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        setSchData((prevData) => {
          const updatedData = prevData.doc.filter((entry) => entry._id !== id);
          return { ...prevData, doc: updatedData };
        });
        console.log("entry deleted");
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <SchContext.Provider
      value={{
        schData,
        getSchData,
        getSortedData,
        isLoading,
        error,
        searchByName,
        searshByRegno,
        deleteEntry,
      }}
    >
      {children}
    </SchContext.Provider>
  );
}

function useSch() {
  const context = useContext(SchContext);
  if (context === undefined) {
    throw new Error("SchContext was used outside the SchProvider");
  }
  return context;
}

export { SchProvider, useSch };
