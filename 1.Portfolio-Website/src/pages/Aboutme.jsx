import React from 'react';
import Navbar from '../components/navbar/Navbar';

import styles from './Aboutme.module.css';
import { Home } from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const Aboutme = () => {
  
  return (
    <div className={styles.Aboutme}>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
 </div>
  );
};

export default Aboutme;
