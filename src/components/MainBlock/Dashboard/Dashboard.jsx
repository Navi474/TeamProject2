import React, { useEffect, useMemo, useState } from "react";
import styles from './dashboard-styles/dashboardStyles.module.css';
import cities from "../WeatherCard/cityList";

function Dashboard({ onSelectCity }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    return cities.filter(city =>
      city.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  const handleSelect = (city) => {
    setQuery(city.name);
    setShowResults(false);

    if (onSelectCity) {
      onSelectCity(city);
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.mainBlock}>
          <h3 className={styles.title}>Weather dashboard</h3>

          <div className={styles.searchBlock}>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
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
                      onSelectCity(city);
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
  );
}

export default Dashboard;