import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css" 

const About = () => {
  return (
   <section className={styles.container} id="about">
    <div className={styles.content}>
    <h2 className={styles.title}>About</h2>

    
      <p>My name is Ritika Shrestha, and I currently work at **Childcare Institute Akon**, where I dedicate my time to nurturing and supporting children's growth and development. In addition to my professional role, I am pursuing a **bachelor's degree at ITM, Australia**, which allows me to expand my knowledge and expertise in my field of interest. Balancing work and studies has been both challenging and rewarding, as I strive to continuously grow both personally and professionally. Through this journey, I am committed to making a positive impact in the world of childcare and education.</p>  
    </div>
   </section> 
  )
}

export default About
