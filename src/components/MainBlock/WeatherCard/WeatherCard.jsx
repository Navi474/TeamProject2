import { FiRefreshCcw, FiTrash2 } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
import styles from "./WeatherCard-styles/WeatherCard.module.css";
export default function WeatherCard() {
    return (
        <div className={styles.card}>

            <div className={styles.header}>
                <span className={styles.city}>Prague</span>
                <span className={styles.country}>Czech Republic</span>
            </div>
            <div className={styles.time}>14:00</div>
            <div className={styles.forecastWrapper}>
                <button className={styles.forecastBtn}>Hourly forecast</button>
                <button className={styles.forecastBtn}>Weekly forecast</button>
            </div>
            <div className={styles.dateWrapper}>
                <span className={styles.dateText}>13.10.2023</span>
                <div className={styles.separator}></div>
                <span className={styles.dateText}>Friday</span>
            </div>
            <div className={styles.weatherIcon}>
                <IoMdSunny size={120} color="#FFD05B" />
            </div>
            <div className={styles.temperature}>22°C</div>

            <div className={styles.footer}>
                <FiRefreshCcw className={styles.actionIcon} />
                <FaRegHeart className={styles.heartIcon} />
                <button className={styles.seeMoreBtn}>See more</button>
                <FiTrash2 className={styles.actionIcon} />
            </div>

        </div>
    );
}