import getCurrentWeather from "../../services/weatherAPI"

const DetailsCurrentWeather = ({weather}) => {

   if (!weather) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Ditails:</h2>
            <div className="flex flex-col items-start mt-4 px-4 text-sm">
                <div>Wind: {weather.wind} m/s</div>
                <div>Humidity: {weather.humidity}%</div>
                <div>Pressure: {weather.pressure} mm</div>

                {/* {weather.precipitation && (<div>Precipitation: {weather.precipitation}%</div>)} */}
            </div>
        </div>
    )
}

export default DetailsCurrentWeather 