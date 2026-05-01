import CurrentWeather from "../components/currentWeather/CurrentWeather"
import DetailsCurrentWeather from "../components/currentWeather/DetailsCurrentWeather"
import DailyForecast from "../components/dailyForecast/DailyForecast"
import Header from "../components/header/Header"
import HourlyForecast from "../components/hourlyForecast/hourlyForecast"


const WeatherScreen = (props) => {

    const { city, weather, setCity, hourlyForecast } = props

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-orange-300 via-orange-200 to-slate-800">
            <div className="relative z-10 container p-8">
                <Header city={city} setCity={setCity} weather={weather}/>

                <div className="flex justify-between">
                    <div className="flex gap-6">
                            <CurrentWeather city={city} weather={weather} />
                            <DetailsCurrentWeather weather={weather}/>
                    </div>
                        
                    <div className="glass-panel">
                        <HourlyForecast hourlyForecast={hourlyForecast}/> 
                    </div>
                </div>
                    
                <div className="mt-6">
                    <DailyForecast hourlyForecast={hourlyForecast}/>
                </div>
                
            </div>
        </div>
    )
}

export default WeatherScreen