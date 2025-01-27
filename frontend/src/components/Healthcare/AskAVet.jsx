import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AskAVet.module.css';

const AskAVet = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Generate a random value for button color
    document.documentElement.style.setProperty('--random', Math.random());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/askavet', { question });
      setResponse(res.data.answer);
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div className={styles.askAVet}>
      <h1>Ask a Vet</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>Submit Question</button>
      </form>
      {response && <div className={styles.result}>{response}</div>}
    </div>
  );
};

export default AskAVet
