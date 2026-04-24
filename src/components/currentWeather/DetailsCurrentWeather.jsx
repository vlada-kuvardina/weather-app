import getCurrentWeather from "../../services/weatherAPI"

const DetailsCurrentWeather = ({weather}) => {

   if (!weather) {
        return <p>Loading...</p>;
    }

    const Precipitation = weather.precipitation ? `${weather.precipitation}%` : "none"

    return (
        <div className="flex">
            <h2>Details:</h2>
            <div className="flex flex-col items-start mt-4 px-4 text-sm">
                <div>Wind: {weather.wind} m/s</div>
                <div>Humidity: {weather.humidity}%</div>
                <div>Pressure: {weather.pressure} mm</div>
                <div>Precipitation: {Precipitation}</div>
            </div>
        </div>
    )
}

export default DetailsCurrentWeather 