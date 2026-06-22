// import { FiRefreshCcw, FiTrash2 } from 'react-icons/fi';
// import { FaRegHeart } from 'react-icons/fa';
// import { IoMdSunny } from 'react-icons/io';
// import styles from "./WeatherCard-styles/WeatherCard.module.css";
// import { useState, useEffect } from 'react';

// export default function WeatherCard() {

//     const API_KEY = '8be71cd1c58713b215c738287dde46b9'

//     const [weather, setWeather] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//     useEffect(() => {
//         const loadWeather = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.5&lon=-0.1&appid=${APIKEY}&units=metric`);
//                 const data = await response.json();
//                 console.log(data);

//                 setWeather(data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loadWeather();
//     }, []);


//     return (
//         <div className={styles.card}>

//             <div className={styles.header}>
//                 <span className={styles.city}>Prague</span>
//                 <span className={styles.country}>Czech Republic</span>
//             </div>
//             <div className={styles.time}>14:00</div>
//             <div className={styles.forecastWrapper}>
//                 <button className={styles.forecastBtn}>Hourly forecast</button>
//                 <button className={styles.forecastBtn}>Weekly forecast</button>
//             </div>
//             <div className={styles.dateWrapper}>
//                 <span className={styles.dateText}>13.10.2023</span>
//                 <div className={styles.separator}></div>
//                 <span className={styles.dateText}>Friday</span>
//             </div>
//             <div className={styles.weatherIcon}>
//                 <IoMdSunny size={120} color="#FFD05B" />
//             </div>
//             <div className={styles.temperature}>22°C</div>

//             <div className={styles.footer}>
//                 <FiRefreshCcw className={styles.actionIcon} />
//                 <FaRegHeart className={styles.heartIcon} />
//                 <button className={styles.seeMoreBtn}>See more</button>
//                 <FiTrash2 className={styles.actionIcon} />
//             </div>

//         </div>
//     );
// }