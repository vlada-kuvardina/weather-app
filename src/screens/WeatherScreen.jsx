import CurrentWeather from "../components/currentWeather/CurrentWeather"
import DetailsCurrentWeather from "../components/currentWeather/DetailsCurrentWeather"
import DailyForecast from "../components/dailyForecast/DailyForecast"
import Header from "../components/header/Header"
import HourlyForecast from "../components/hourlyForecast/hourlyForecast"
import { getBackground } from "../utils/weatherTheme";
import day from "../assets/bg_weatherScreen/day.jpg"
import morning from "../assets/bg_weatherScreen/morning.jpg"
import evening from "../assets/bg_weatherScreen/evening.jpg"
import night from "../assets/bg_weatherScreen/night.jpg"

const WeatherScreen = (props) => {

    const { city, weather, setCity, hourlyForecast } = props

    const bg = getBackground(weather)
    const bgImages = { morning, day, evening, night };
    const currentBg = bgImages[bg] || day;

    return (
        <div className="min-h-screen relative"
            style={{
                backgroundImage: `url(${currentBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
        >
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