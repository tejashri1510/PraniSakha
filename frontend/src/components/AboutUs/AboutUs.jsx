import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to <span className={styles.highlight}>PraniSakha</span>, your trusted companion in pet care. Our mission is to provide
          comprehensive, accessible, and reliable resources to ensure the well-being of your beloved animals.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Our Mission</h2>
          <p className={styles.cardText}>
            At PraniSakha, we are dedicated to empowering pet owners with daily healthcare tips, expert advice, and a curated
            directory of pet-friendly services. Our goal is to nurture healthier and happier lives for animals everywhere.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Why Choose Us?</h2>
          <ul className={`${styles.cardText} ${styles.list}`}>
            <li>Daily healthcare tips to ensure your pet's wellness.</li>
            <li>Access to a directory of pet-friendly services near you.</li>
            <li>Expert advice tailored for your pet's unique needs.</li>
            <li>A compassionate team that truly cares about animals.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Our Vision</h2>
          <p className={styles.cardText}>
            We envision a world where every pet receives the love, care, and attention they deserve. Through technology and
            community, we aim to build a healthier and more connected ecosystem for pet owners and their furry companions.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Join Us</h2>
          <p className={styles.cardText}>
            Become a part of our journey as we make pet care easier, more accessible, and enjoyable. Together, we can create a
            better world for our animal friends.
          </p>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <p className={styles.contactText}>
          Have questions or need assistance? We’d love to hear from you!
        </p>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.formInput}
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              id="message"
              className={styles.formTextarea}
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AboutUs
