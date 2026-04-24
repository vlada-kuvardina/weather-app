import { useState, useEffect } from "react"
import WeatherScreen from "../screens/WeatherScreen"
import SearchScreen from "../screens/SearchScreen"
import getCurrentWeather from "../services/weatherAPI"

const WeatherApp = () => {

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");

    const fetchWeather = async () => {
        const data = await getCurrentWeather(city);
        setWeather(data);
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

