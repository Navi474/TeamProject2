import { useEffect, useState } from "react";
import Header from "./components/Header/header-main/Header";
import Dashboard from "./components/MainBlock/Dashboard/Dashboard";
import "./App.css";

function App() {
    const [cities, setCities] = useState(() => {
        const saved = localStorage.getItem("weather_cities");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("weather_cities", JSON.stringify(cities));
    }, [cities]);

    const addCity = (city) => {
        setCities(prev => {
            const exists = prev.some(
                c => c.name.toLowerCase() === city.name.toLowerCase()
            );

            if (exists) return prev;

            return [...prev, city];
        });
    };

    const removeCity = (cityName) => {
        setCities(prev =>
            prev.filter(c => c.name !== cityName)
        );
    };

    return (
        <>
            <Header />
            <Dashboard
                onSelectCity={addCity}
                cities={cities}
                onRemoveCity={removeCity}
            />
        </>
    );
}

export default App;