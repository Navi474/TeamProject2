import styles from "./WeatherList-styles/WeatherList.module.css";
import WeatherCard from '../WeatherCard/WeatherCard';

export default function WeatherList() {
    return (
        <div className={styles.listContainer}>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    );
}