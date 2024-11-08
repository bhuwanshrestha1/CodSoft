import React, {useState} from 'react';
import styles from "./Navbar.module.css"
import { getImageUrl } from '../../utils';

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

  return (
    <section className={styles.container}>
    <nav className={styles.navbar}>
    
        <a className={styles.title} href="/">My Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn}
             src={menuOpen?getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")}
              alt="menu-button"
            onClick={()=> setMenuOpen(!menuOpen)}
            />


            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
            onClick={() =>setMenuOpen(false)}
            >

                <li><a href="/">Home</a></li>

                <li><a href="/aboutme">About</a></li>

                <li><a href="#week_1">Week 1</a></li>

                <li><a href="#week_2">Week 2</a></li>

                <li><a href="#week_3">Week 3</a></li>

                <li><a href="#week_4">Week 4</a></li>

                <li><a href="#week_5">Week 5</a></li>

                <li><a href="#more">More</a></li>
                
                <li><a href="#login">Login</a></li>

            </ul>


        </div>
      
    </nav>
    </section>
  )
}

export default Navbar
