import Copyright from "./Copyright";
import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Logo />
        <div className={styles["address"]}>
          <h2>Computer Center Address</h2>
          <div className={styles["address-item"]}>
            <p>ADDRESS:</p>
            <p>Shanti Nagar Banda(21001), Uttar Pradesh, India</p>
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
          <form>
            <input
              type="text"
              placeholder="name"
              className={styles["form-contact-input"]}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles["form-contact-input"]}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Textarea"
              className={styles["form-contact-input"]}
            />
            <button className={styles["form-contact-btn"]}>Send Message</button>
          </form>
        </div>
      </div>
      <Copyright />
    </>
  );
}

export default Footer;
