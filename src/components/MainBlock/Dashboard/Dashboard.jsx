import React from "react";
import styles from './dashboard-styles/dashboardStyles.module.css';


function Dashboard() {
  return (
    <div className={styles.block}>
      <h3 className={styles.h3}>Weather dashboard</h3>
      <div className={styles.textColumn}>
        <p className={styles.leftColumn}>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </p>
        <div className={styles.verticalLine}></div>
        <p className={styles.rightColumn}>
          October 2023 <br />
          Friday, 13<span>th</span>
        </p>
      </div>
      <div className={styles.downBlock}>
        <input className={styles.dashInput} type="text" placeholder="Search location..." /><button className={styles.searchBtn}>
          <img src="src/assets/image 2.svg" alt="search..." />
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
