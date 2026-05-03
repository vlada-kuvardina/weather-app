import { getWeatherIcon } from "../../utils/weatherIcons";
import toFahrenheit from "../../utils/temperature"

const CurrentWeather = (props) => {

    const { city, weather, unit } = props

    if (!weather) {
        return <p>Loading...</p>;
    }

    const temp = unit === "C"
        ? Math.round(weather.temp)
        : toFahrenheit(weather.temp);

    const feelsLike = unit === "C"
        ? Math.round(weather.feelsLike)
        : toFahrenheit(weather.feelsLike);

    return (
        <div className="flex items-center h-full p-1">
            <div className="flex flex-col flex-shrink-0 gap-2 items-center"> 
                <div className="w-32 h-[100%] overflow-hidden">
                    <img 
                        src={getWeatherIcon(weather)} 
                        alt={weather.description}
                        className="w-[150%] h-[150%] object-contain"
                    />
                </div>
                <div className="flex flex-col mt-3 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                        <span>Sunrise: {weather.sunrise.toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: 'UTC'
                        })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Sunset: {weather.sunset.toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: 'UTC'
                        })}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center h-full">
                <div className="text-7xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg text-cyan-600">
                    {temp}°{unit}
                </div>

                <div>
                    <div className="text-xl md:text-2xl text-white/90 font-medium">
                        Feels like {feelsLike}°{unit}
                    </div>

                    <div className="text-lg md:text-xl text-white/80 capitalize">
                        {weather.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather