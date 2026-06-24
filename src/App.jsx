import { useEffect, useState } from "react";
import Header from "./components/Header/header-main/Header";
import Dashboard from "./components/MainBlock/Dashboard/Dashboard";
import WeatherList from "./components/MainBlock/WeatherList/WeatherList";

function App() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("weather_cities");
        if (saved) {
            setCities(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("weather_cities", JSON.stringify(cities));
    }, [cities]);

    const addCity = (city) => {
        setCities(prev => {
            if (prev.find(c => c.name === city.name)) return prev;
            return [...prev, city];
        });
    };

    const removeCity = (cityName) => {
        setCities(prev => prev.filter(c => c.name !== cityName));
    };

    return (
        <>
            <Header />
            <Dashboard onSelectCity={addCity} />
            <WeatherList
                cities={cities}
                onRemoveCity={removeCity}
            />
        </>
    );
}

export default App;