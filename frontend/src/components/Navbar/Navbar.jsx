import {useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

 const Navbar = () => {
  
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>PraniSakha</a>
        <div className={styles.menu}>
        
          
            <ul  className={styles.menuItems}>
                <li><a href='/'>Home</a></li>
                <li><a href='/dailytips'>DailyTips</a></li>
                <li><a  href='/healthcare'>Healthcare</a></li>
                <li><a href='/aboutus'>About Us</a></li>


            </ul>
        </div>
    </nav>
  )
}


export default Navbar


