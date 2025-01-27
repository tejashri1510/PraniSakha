import React from 'react';
import styles from './NotFound.module.css'; // Import the CSS module

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h4 className={styles.notFoundText}>Page Not Found</h4>
    </div>
  );
};

export default NotFound;
