import React from "react";
import styles from './dashboard-styles/dashboardStyles.module.css';


function Dashboard() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.mainBlock}>
          <h3 className={styles.title}>Weather dashboard</h3>
          <div className={styles.textColumn}>
            <p className={styles.leftColumn}>Create your personal list of favorite cities and always be aware of the weather.</p>
            <div className={styles.verticalLine}></div>
            <p className={styles.rightColumn}>
              October 2023 <br />
              Friday, 13<span>th</span>
            </p>
          </div>
          <div className={styles.searchBlock}>
            <input className={styles.searchInput} type="text" placeholder="Search location..." />
            <button className={styles.searchBtn}>
              <img src="src/assets/image 2.svg" alt="search..." />
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Dashboard;
