import { useState } from "react"
import WeatherScreen from "../screens/WeatherScreen"
import SearchScreen from "../screens/SearchScreen"

const WeatherApp = () => {

    const [city, setCity] = useState("Мщсква")

    return (
        <div>
            {city ?
                <WeatherScreen
                    city={city}
                />
                :
                <SearchScreen />
            }
        </div>
    )

}

export default WeatherApp

