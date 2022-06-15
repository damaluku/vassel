import React from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <>
      <main className={styles.contact}>
        <div>
          <h2>Contact Us</h2>
          <form action="">
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={styles.input}
              required
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className={styles.input}
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <input type="submit" value="submit" className={styles.submit} />
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
