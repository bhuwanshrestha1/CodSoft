import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>Contact</h2>
        <p>
          I'm currently available for hiring, so feel free to send me a message. You can contact me anytime.
        </p>
        <p>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email" className={styles.emailIcon} />
          bhansarekh@gmail.com
        </p>
        <p>
          <img src={getImageUrl("contact/phone.png")} alt="phone" className={styles.phone} />
          +772-825-524
        </p>
        <p>Sydney, New South Wales, Australia</p>
      </div>
      <div>
        <form action="#" method="POST">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>

          <button type="submit" className={styles.contactBtn}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
