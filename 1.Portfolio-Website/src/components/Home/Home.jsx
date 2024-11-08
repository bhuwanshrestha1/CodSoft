import React from 'react';
import styles from "./Home.module.css"
import { getImageUrl } from '../../utils';

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I am Ritika Shrestha</h1>
        {/* <p>I am working at Childcare Institute.</p> */}
        {/* <a href="mailto:bhansarekh@gmail.com" className={styles.contactBtn}>Contact Me</a> */}
      </div>
      <img src={getImageUrl("hero/ritika.jpg")} alt="Ritika" className={styles.heroImg} />

      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>

    </section>
  );
};

