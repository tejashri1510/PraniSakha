import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Healthcare.module.css';

const Healthcare = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.healthcare}>
      <h1 className={styles.title}>Welcome to Healthcare Tools</h1>
      <p className={styles.subtitle}>Choose a tool to get started</p>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.symptomCheckerButton}`}
          onClick={() => navigate('/symptomchecker')}
        >
          Symptom Checker
        </button>
        <button
          className={`${styles.button} ${styles.askVetButton}`}
          onClick={() => navigate('/askavet')}
        >
          Ask a Vet
        </button>
      </div>
    </div>
  );
};

export default Healthcare;
