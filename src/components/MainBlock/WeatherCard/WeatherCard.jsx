import { FiRefreshCcw, FiTrash2 } from 'react-icons/fi';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
import styles from "./WeatherCard-styles/WeatherCard.module.css";
import { useState, useEffect } from 'react';

export default function WeatherCard({ city, onRemove }) {
    const API_KEY = '8be71cd1c58713b215c738287dde46b9';

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const loadWeather = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            setWeather(data);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (city) {
            loadWeather();
        }
    }, [city]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!weather) return null;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.city}>{weather.name}</span>
                <span className={styles.country}>{weather.sys.country}</span>
            </div>

            <div className={styles.time}>
                {new Date().toLocaleTimeString()}
            </div>

            <div className={styles.weatherIcon}>
                <IoMdSunny size={120} color="#FFD05B" />
            </div>

            <div className={styles.temperature}>
                {Math.round(weather.main.temp)}°C
            </div>

            <div className={styles.footer}>
                <FiRefreshCcw
                    className={styles.actionIcon}
                    onClick={loadWeather}
                    title="Refresh weather"
                />

                {isFavorite ? (
                    <FaHeart
                        className={styles.heartIcon}
                        onClick={() => setIsFavorite(false)}
                        title="Remove from favorites"
                    />
                ) : (
                    <FaRegHeart
                        className={styles.heartIcon}
                        onClick={() => setIsFavorite(true)}
                        title="Add to favorites"
                    />
                )}

                <button className={styles.seeMoreBtn}>
                    See more
                </button>

                <FiTrash2
                    className={styles.actionIcon}
                    onClick={() => onRemove?.(city.name)}
                    title="Remove city"
                />
            </div>
        </div>
    );
}