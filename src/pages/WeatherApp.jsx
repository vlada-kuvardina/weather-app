import { useState, useEffect } from "react"
import WeatherScreen from "../screens/WeatherScreen"
import SearchScreen from "../screens/SearchScreen"
import { getCurrentWeather, getHourlyForecast } from "../services/weatherAPI"

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const [hourlyForecast, setHourlyForecast] = useState(null)
    const [unit, setUnit] = useState("C")

    const fetchWeather = async () => {
        const current = await getCurrentWeather(city);
        const hourlyForecastData = await getHourlyForecast(city);

        setWeather(current);
        setHourlyForecast(hourlyForecastData);
    };

    useEffect(() => {
        if (city) {
            fetchWeather();
        }
    }, [city]);

    return (
        <div>
            {city ?
                <WeatherScreen
                    city={city}
                    weather={weather}
                    setCity={setCity}
                    hourlyForecast={hourlyForecast}  
                    hourlyForecast={hourlyForecast}
                    unit={unit}
                    setUnit={setUnit}
                />
                :
                <SearchScreen 
                    setCity={setCity}
                />
            }
        </div>
    )

}

export default WeatherApp

