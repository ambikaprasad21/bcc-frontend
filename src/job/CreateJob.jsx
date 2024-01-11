import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./CreateJob.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Spinner from "../components/Spinner";

// const BASE_URL = "http://127.0.0.1:3000/api/v1/job";
const BASE_URL = "https://bccbackend.onrender.com/api/v1/job";

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["link", "image", "video"],

  ["clean"], // remove formatting button
];

const module = {
  toolbar: toolbarOptions,
};

function CreateJob() {
  const [job, setJob] = useState("");
  const [heading, setHeading] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const quillStyles = {
    // height: "300px",
  };

  const createJob = async () => {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ heading, detail: job }),
      });
      if (!res.ok) {
        toast.error("Error creating new Job", {
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
        toast.success("New Job Created", {
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
        setJob("");
        setHeading("");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Create New Job</h1>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Short Heading of Job"
          className={styles.input}
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <ReactQuill
          modules={module}
          theme="snow"
          value={job}
          onChange={setJob}
          style={quillStyles}
          placeholder="Write details of the Job"
        />
        <button className={styles.create} onClick={createJob}>
          {loading ? <Spinner /> : "Create"}
        </button>
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default CreateJob;
