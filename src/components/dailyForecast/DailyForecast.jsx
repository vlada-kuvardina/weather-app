import toFahrenheit from "../../utils/temperature";

const DailyForecast = ({ hourlyForecast, unit }) => {

  if (!hourlyForecast) return null;

  const dailyData = hourlyForecast
    .filter(item => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return (
    <div className="flex gap-4 mt-6">
      {dailyData.map((item, index) => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("en-US", {
          weekday: "long"
        });
        const dailyTemp = unit === "C"
          ? Math.round(item.main.temp)
          : toFahrenheit(item.main.temp);

        return (
          <div key={index} className="flex-1 flex flex-col items-center text-white">
            <p className="text-2xl">{day}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            />
            <p className="text-xl">{dailyTemp}°</p>
          </div>
        );
      })}
    </div>
  );
};

export default DailyForecast