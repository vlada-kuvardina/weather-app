import { getWeatherIcon } from "../../utils/weatherIcons";

const CurrentWeather = (props) => {

    const { city, weather } = props

    if (!weather) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-1">
            <div className="flex-shrink-0 -mt-2">
                <div className="w-40 h-40 md:w-52 md:h-52 overflow-hidden">
                    <img 
                        src={getWeatherIcon(weather)} 
                        alt={weather.description}
                        className="w-[220%] h-[220%] object-contain drop-shadow-2xl -translate-x-1/4 -translate-y-1/4"
                    />
                </div>
                <div className="flex flex-col gap-1 mt-1 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                        <span>🌅</span>
                        <span>Sunrise: {weather.sunrise.toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>🌇</span>
                        <span>Sunset: {weather.sunset.toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg">
                    +{Math.round(weather.temp)}°
                </div>

                <div className="text-xl md:text-2xl text-white/90 mt-2 font-medium">
                    Feels like {Math.round(weather.feelsLike)}°
                </div>

                <div className="text-lg md:text-xl text-white/80 mt-1 capitalize">
                    {weather.description}
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather