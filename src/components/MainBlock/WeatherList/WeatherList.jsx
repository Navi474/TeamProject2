import styles from "./WeatherList-styles/WeatherList.module.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function WeatherList({ cities, onRemoveCity }) {
    if (!cities.length) return null;

    return (
        <div className={styles.listContainer}>
            {cities.map(city => (
                <WeatherCard
                    key={city.name}
                    city={city}
                    onRemove={onRemoveCity}
                />
            ))}
        </div>
    );
}

export default WeatherList;