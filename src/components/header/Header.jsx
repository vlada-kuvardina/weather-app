import SearchBar from "./SearchBar"
import { getCityTime } from "../../utils/time"

const Header = (props) => {

    const { city, setCity, weather } = props

    const cityTime = weather ? getCityTime(weather.timezone) : null;

    return (
        <div className="flex justify-between items-start mb-5 p-4 relative">

            {/* ЛЕВАЯ ЧАСТЬ */}
            <div className="flex flex-col gap-2">
                <SearchBar setCity={setCity}/>
                <h2 className="text-8xl font-semibold text-pink-400">{city}</h2>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 text-xl text-white flex flex-col justify-center items-center">
                <p>Local time: </p>
                <div className="text-4xl font-medium">
                    {cityTime ? cityTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }) : "Loading..."}
                </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div>
                °C / °F
            </div>

        </div>
    )
}

export default Header