import getCurrentWeather from "../../services/weatherAPI"

const CurrentWeather = (props) => {

    const { city, weather } = props

    if (!weather) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex">
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} />

            <div className="flex flex-col items-start px-4 mt-6">
                <div className="text-6xl font-bold">
                    {weather.temp}°C
                </div>

                <div className="text-lg">
                    Cloudy
                </div>

                <div className="text-sm opacity-70">
                    Feels like 23°
                </div>
            </div>

        </div>
    )
}

export default CurrentWeather