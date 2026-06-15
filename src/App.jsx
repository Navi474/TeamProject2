import Header from './components/Header/header-main/Header';
import Dashboard from './components/MainBlock/Dashboard/Dashboard';
import WeatherList from './components/MainBlock/WeatherList/WeatherList';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <Dashboard />
            <WeatherList />
        </>
    );
}

export default App;