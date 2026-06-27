import { useState, useEffect } from 'react';
import { FiRefreshCcw, FiTrash2 } from 'react-icons/fi';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
import styles from "./WeatherCard-styles/WeatherCard.module.css";

export default function WeatherCard({ city, onRemove }) {
    const API_KEY = '8be71cd1c58713b215c738287dde46b9';

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favorite, setFavorite] = useState(false);

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const pad = n => String(n).padStart(2, '0');
    const dateString = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;
    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });

    const loadWeather = async () => {
        if (!city) return;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!city) return;

        let ignore = false;

        const fetchWeather = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
                );

                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

                const data = await response.json();

                if (!ignore) {
                    setWeather(data);
                }
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        };

        fetchWeather();

        return () => {
            ignore = true;
        };
    }, [city]);

    if (loading && !weather) {
        return (
            <div className={styles.card} style={{ padding: '20px', color: 'black' }}>
                Завантаження погоди для {city?.name}...
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.card} style={{ padding: '20px', color: 'red' }}>
                Помилка: {error}
            </div>
        );
    }

    if (!weather) return null;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.city}>{city.name}</span>
                <span className={styles.country}>{city.country}</span>
            </div>

            <div className={styles.time}>{timeString}</div>

            <div className={styles.forecastWrapper}>
                <button className={styles.forecastBtn}>Hourly forecast</button>
                <button className={styles.forecastBtn}>Weekly forecast</button>
            </div>

            <div className={styles.dateWrapper}>
                <span className={styles.dateText}>{dateString}</span>
                <div className={styles.separator}></div>
                <span className={styles.dateText}>{dayString}</span>
            </div>

            <div className={styles.weatherIcon}>
                <IoMdSunny size={120} color="#FFD05B" />
            </div>

            <div className={styles.temperature}>
                {Math.round(weather.main?.temp || 0)}°C
            </div>

            <div className={styles.footer}>
                <FiRefreshCcw
                    className={styles.actionIcon}
                    onClick={loadWeather}
                    title="Оновити погоду"
                />

                {favorite ? (
                    <FaHeart
                        className={`${styles.heartIcon} ${styles.favorite}`}
                        onClick={() => setFavorite(false)}
                    />
                ) : (
                    <FaRegHeart
                        className={styles.heartIcon}
                        onClick={() => setFavorite(true)}
                    />
                )}

                <button
                    className={styles.seeMoreBtn}
                    style={{ display: 'none' }}
                >
                    See more
                </button>

                <FiTrash2
                    className={styles.actionIcon}
                    onClick={() => onRemove && onRemove(city.name)}
                    title="Видалити місто"
                />
            </div>
        </div>
    );
}