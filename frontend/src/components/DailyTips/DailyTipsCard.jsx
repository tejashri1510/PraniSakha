import React from "react";
import styles from "./DailyTipsCard.module.css"; // Import the specific CSS for the card

const DailyTipsCard = ({ tip }) => {
  return (
    
    <div className={styles.dailyTipCard}>
      {/* Access and render the title and description from the tip object */}
      <h3>{tip.title}</h3>
      <p>{tip.description}</p>
    </div>
  );
};

export default DailyTipsCard;
