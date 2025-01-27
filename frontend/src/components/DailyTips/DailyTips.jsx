import React, { useState, useEffect } from 'react';
import DailyTipsCard from './DailyTipsCard';
import styles from './DailyTips.module.css'; // Assuming you have styles for DailyTips

const DailyTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating an API call
  useEffect(() => {
    setTimeout(() => {
      // Static mock data
      const fetchedTips = [
        { title: 'Stay Hydrated', description: 'Drinking water is essential for staying healthy.' },
        { title: 'Exercise Regularly', description: 'Daily exercise improves overall health.' },
        { title: 'Sleep Well', description: 'Get enough sleep to recharge your body and mind.' },
      ];

      setTips(fetchedTips); // Setting the static data
      setLoading(false); // Set loading to false after the data is "fetched"
    }, 2000); // Simulating a 2-second delay like an actual API call
  }, []); // Empty array ensures this effect runs only once when the component mounts

  if (loading) {
    return <p>Loading daily tips...</p>; // Show loading message while fetching
  }

  return (
    <div className={styles.dailyTipsContainer}>
      <h1 className={styles.pageTitle}>Your Daily Wellness Guide</h1>
      <p className={styles.par}>Healthy habits for pets ensure their longevity and quality of life.</p>
      
      <div className={styles.dailyTipsWrapper}>
        {tips.map((tip, index) => (
          <DailyTipsCard key={index} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default DailyTips;
