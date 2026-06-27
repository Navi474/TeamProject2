import React, { useEffect, useMemo, useState } from "react";
import styles from './dashboard-styles/dashboardStyles.module.css';
import citiesDatabase from "../WeatherCard/cityList";
import WeatherList from '../WeatherList/WeatherList.jsx';
import ForecastChart from '../ForecastChart/ForecastChart.jsx';
import NewsSection from '../NewsSection/NewsSection.jsx';
import GallerySection from '../GallerySection/GallerySection.jsx';
import Footer from "../../Footer/Footer.jsx";

const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

function Dashboard({ onSelectCity, cities, onRemoveCity }) {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [showResults, setShowResults] = useState(false);

    const today = new Date();
    const monthYear = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const dayDate = `${dayName}, ${getOrdinal(today.getDate())}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    const searchResults = useMemo(() => {
        if (!debouncedQuery.trim()) return [];

        return citiesDatabase.filter(city =>
            city.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
    }, [debouncedQuery]);

    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <div className={styles.mainBlock}>
                        <h3 className={styles.title}>Weather dashboard</h3>

                        <div className={styles.heroInfoBlock}>
                            <div className={styles.heroQuote}>
                                Create your personal list of favorite cities and always be aware of the weather.
                            </div>
                            <div className={styles.heroLine}></div>
                            <div className={styles.heroDate}>
                                <div style={{ fontWeight: 600 }}>{monthYear}</div>
                                <div>{dayDate}</div>
                            </div>
                        </div>

                        <div className={styles.searchBlock}>
                            <input
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setShowResults(true);
                                }}
                                onFocus={() => setShowResults(true)}
                                className={styles.searchInput}
                                type="text"
                                placeholder="Search location..."
                            />

                            <button className={styles.searchBtn}>
                                <img src="src/assets/image 2.svg" alt="search" />
                            </button>

                            {showResults && searchResults.length > 0 && (
                                <ul className={styles.searchResults}>
                                    {searchResults.map(city => (
                                        <li
                                            key={`${city.name}-${city.country}`}
                                            className={styles.searchItem}
                                            onClick={() => {
                                                if (onSelectCity) onSelectCity(city);
                                                setQuery("");
                                                setShowResults(false);
                                            }}
                                        >
                                            {city.name}, {city.country}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <WeatherList cities={cities} onRemoveCity={onRemoveCity} />

            <div className={styles.chartSection}>
                <ForecastChart />
            </div>

            <NewsSection />

            <GallerySection />
            <Footer />
        </>
    );
}

export default Dashboard;