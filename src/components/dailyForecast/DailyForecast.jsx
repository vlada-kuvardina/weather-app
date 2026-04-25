const DailyForecast = ({ hourlyForecast }) => {

  if (!hourlyForecast) return null;

  const dailyData = hourlyForecast
    .filter(item => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return (
    <div className="flex gap-4 mt-6 px-4">
      {dailyData.map((item, index) => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("en-US", {
          weekday: "short"
        });

        return (
          <div key={index} className="flex flex-col items-center">
            <p>{day}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            />
            <p>{Math.round(item.main.temp)}°</p>
          </div>
        );
      })}
    </div>
  );
};

export default DailyForecast