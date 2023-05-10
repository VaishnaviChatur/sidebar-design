import React from "react";
import styles from "./profile.module.css";
export default function Profilecard() {
  return (
    <div className={styles.container}>
      <h1>Know your mentors</h1>
      <p>
        Work with a mentor (senior data scientists from top companies) who
        closely looks at your progress, gives you personalized feedback<br></br> and
        helps you fill gaps in your knowledge.
      </p>
    </div>
  );
}
