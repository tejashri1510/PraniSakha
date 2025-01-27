import React, { useState } from 'react';
import axios from 'axios';
import styles from './SymptomChecker.module.css';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [guidance, setGuidance] = useState('');
  const [disease, setDisease] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/symptoms', { symptoms });
      setGuidance(response.data.guidance);
      setDisease(response.data.diseaseClass);
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
      {disease && (
        <div className={styles.result}>
          <h4>Predicted Disease Class:</h4>
          <p>{disease}</p>
        </div>
      )}
      {guidance && (
        <div className={styles.result}>
          <h4>Care Guidance:</h4>
          <p>{guidance}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
