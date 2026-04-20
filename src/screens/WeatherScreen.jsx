import CurrentWeather from "../components/currentWeather/CurrentWeather"
import DetailsCurrentWeather from "../components/currentWeather/DetailsCurrentWeather"
import DailyForecast from "../components/dailyForecast/DailyForecast"
import Header from "../components/header/Header"
import HourlyForecast from "../components/hourlyForecast/hourlyForecast"


const WeatherScreen = (props) => {

    const { city } = props

    return (
        <div className="min-h-screen bg-pink-200">
            <Header city={city} />
            <div className="flex">
                <CurrentWeather />
                <DetailsCurrentWeather />
            </div>
            <HourlyForecast />
            <DailyForecast />
        </div>
    )
}

export default WeatherScreen