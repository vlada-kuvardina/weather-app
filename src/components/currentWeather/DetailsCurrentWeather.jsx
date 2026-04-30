const DetailsCurrentWeather = ({weather}) => {

   if (!weather) {
        return <p>Loading...</p>;
    }

    const Precipitation = weather.precipitation ? `${weather.precipitation}%` : "none"

    return (
        <div>
            <h2 className="text-cyan-700">Details:</h2>
            <div className="flex flex-col mt-4 px-4 text-sm text-white">
                <div>Wind: {weather.wind} m/s</div>
                <div>Humidity: {weather.humidity}%</div>
                <div>Pressure: {weather.pressure} mm</div>
                <div>Precipitation: {Precipitation}</div>
            </div>
        </div>
    )
}

export default DetailsCurrentWeather 