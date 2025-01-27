import React, { useState } from 'react';
import axios from 'axios';
import styles from './SymptomChecker.module.css';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [guidance, setGuidance] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/symptoms', { symptoms });
      setGuidance(response.data.guidance);
    } catch (error) {
      console.error('Error checking symptoms:', error);
    }
  };

  return (
    <div className={styles.symptomChecker}>
      <h1>Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter symptoms"
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>Check Symptoms</button>
      </form>
      {guidance && <div className={styles.result}>{guidance}</div>}
    </div>
  );
};

export default SymptomChecker
