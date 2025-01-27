import React, { useState } from "react";
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome in PraniSakha!!</h1>
        <p className={styles.description}>
          Helping animals is not just an act of charity; it is an act of love, compassion, and a reminder of the sacred bond we share with all living beings.
        </p>
        <div className={styles.buttonContainer}>
          <a href="/register" className={styles.contactBtn}>Register</a>
          <a href="/login" className={styles.contactBtn}>Login</a>
        </div>
      </div>
      <img src="/Kindness-modified.png" className={styles.heroImg} alt="Hero" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Home
