import CurrentWeather from "../components/currentWeather/CurrentWeather"
import DetailsCurrentWeather from "../components/currentWeather/DetailsCurrentWeather"
import DailyForecast from "../components/dailyForecast/DailyForecast"
import Header from "../components/header/Header"
import HourlyForecast from "../components/hourlyForecast/hourlyForecast"


const WeatherScreen = (props) => {

    const { city, weather, setCity, hourlyForecast } = props

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-orange-300 via-orange-200 to-slate-800">
            <div className="relative z-10">
                <Header city={city} setCity={setCity}/>
                
                <div className="container mx-auto px-1 py-1">
                    <div className="glass-panel mb-1">
                        <CurrentWeather city={city} weather={weather} />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                            <DetailsCurrentWeather weather={weather}/>
                        </div>
                        <div className="md:col-span-2">
                            <HourlyForecast hourlyForecast={hourlyForecast}/> 
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <DailyForecast hourlyForecast={hourlyForecast}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherScreen