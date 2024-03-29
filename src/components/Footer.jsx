import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Copyright from "./Copyright";
import styles from "./Footer.module.css";
import { ToastContainer, toast } from "react-toastify";
import Logo from "./Logo";
import Spinner from "./Spinner";
import { useAuth } from "../context/authContext";

function Footer() {
  const form = useRef();
  const { contactForm } = useAuth();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (contactForm) {
      form.current?.querySelector("input")?.focus();
    }
  }, []);

  const handleMesgLength = (e) => {
    if (e.target.value.length <= 1000) {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        "https://bccbackend.onrender.com/api/v1/notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!res.ok) {
        setError("Email Already Used, Try with different email");
        setIsLoading(false);
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
        return;
      } else {
        toast.success("Message Sent Successfully", {
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
        await emailjs.sendForm(
          "service_m2t5okg",
          "template_g14srmj",
          form.current,
          "o4A137lK1OPG6VhBI"
        );
      }
    } catch (err) {
      console.log(err);
      setError(`Error sending message ${err.message}`);
    } finally {
      setIsLoading(false);
      setEmail("");
      setName("");
      setMessage("");
    }
  };
  return (
    <>
      <div className={styles.footer}>
        <div className={styles["logo-review"]}>
          <Logo />
          <div className={styles.review}>
            <a
              title="Customer reviews of bcccafe.vercel.app"
              href="https://www.webwiki.com/bcccafe.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.webwiki.com/etc/rating/widget/1405789924/bcccafe-vercel-app-rating-full-180.png"
                alt="Reviews of bcccafe.vercel.app"
              />
            </a>
          </div>
        </div>
        <div className={styles["address"]}>
          <h2>Computer Center Address</h2>
          <div className={styles["address-item"]}>
            <p>ADDRESS:</p>
            <p>Shanti Nagar Banda(210001), Uttar Pradesh, India</p>
          </div>
          <div className={styles["address-item"]}>
            <p>CALL:</p>
            <p>+91 8090015182</p>
          </div>
          <div className={styles["address-item"]}>
            <p>EMAIL ON:</p>
            <p>639205351a@gmail.com</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={handleSubmit} id="contact">
            {console.log()}
            <input
              type="text"
              placeholder="name"
              name="user_name"
              required
              className={styles["form-contact-input"]}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className={styles["form-contact-input"]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => handleMesgLength(e)}
              required
              id=""
              cols="30"
              rows="10"
              placeholder="Message (Max. 1000 characters)"
              className={styles["form-contact-input"]}
            />
            {isLoading ? (
              <Spinner />
            ) : (
              <button className={styles["form-contact-btn"]}>
                Send Message
              </button>
            )}
            {error ? <span>{error}</span> : ""}
          </form>
        </div>
      </div>
      <Copyright />
      <ToastContainer />
    </>
  );
}

export default Footer;
