import { useState, useEffect } from "react"
import WeatherScreen from "../screens/WeatherScreen"
import SearchScreen from "../screens/SearchScreen"
import { getCurrentWeather, getHourlyForecast } from "../services/weatherAPI"
import LoadingScreen from "../screens/LoadingScreen"
import ErrorScreen from "../screens/ErrorScreen"

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const [hourlyForecast, setHourlyForecast] = useState(null);
    const [unit, setUnit] = useState("C");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        if (!city.trim()) return;

        setLoading(true);
        setWeather(null);
        setHourlyForecast(null);
        setError(null);
        
        try {
            const [currentData, forecastData] = await Promise.all([
                getCurrentWeather(city),
                getHourlyForecast(city)
            ]);

            if (!currentData) {
                throw new Error("Такого города не существует.");
            }

            setWeather(currentData);
            setHourlyForecast(forecastData);
            
        } catch (err) {
            setError(err.message || "Произошла неизвестная ошибка");
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        if (city) {
            fetchWeather();
        }
    }, [city]);

    return (
        <div>

            {!city && !loading && !error && (
                <SearchScreen setCity={setCity} />
            )}

            {loading && (
                < LoadingScreen />
            )}

            {error && (              
                <ErrorScreen error={error} setCity={setCity}/>
            )}

            {city && !loading && !error && weather && (
                <WeatherScreen
                    city={city}
                    weather={weather}
                    setCity={setCity}
                    hourlyForecast={hourlyForecast}  
                    unit={unit}
                    setUnit={setUnit}
                />
            )}
        </div>
    )

}

export default WeatherApp

