const HourlyForecast = (props) => {

    const { hourlyForecast } = props

    if (!hourlyForecast) {
        return <p>Loading...</p>;
    }

    const hourlyData = hourlyForecast.slice(0, 6);

    return (
        <div className="flex gap-4 px-4 mt-6">
            {hourlyData.map((item, index) => {
                const time = item.dt_txt.split(" ")[1].slice(0, 5);

                return (
                    <div key={index} className="flex flex-col items-center">
                        <p>{time}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                        />
                        <p>{Math.round(item.main.temp)}°</p>
                    </div>
                );
            })}
        </div>
    )
}

export default HourlyForecast