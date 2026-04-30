import sunny from "../assets/icons_weather/sunny.svg";
import cloudy from "../assets/icons_weather/cloudy.svg";
import veryCloudy from "../assets/icons_weather/very_cloudy.svg";
import rainy from "../assets/icons_weather/rainy.svg";
import drizzle from "../assets/icons_weather/drizzle.svg";
import storm from "../assets/icons_weather/storm.svg";
import snow from "../assets/icons_weather/snow.svg";
import fog from "../assets/icons_weather/fog.svg";

export const weatherIconsMap = {
  Clear: sunny,
  Clouds: cloudy,
  Rain: rainy,
  Drizzle: drizzle,
  Thunderstorm: storm,
  Snow: snow,
  Mist: fog,
  Fog: fog,
};

export const getWeatherIcon = (weather) => {
  if (!weather) return sunny;

  const main = weather.main;
  const description = weather.description;

  if (main === "Clouds") {
    if (description?.includes("overcast")) return veryCloudy;
    return cloudy;
  }

  return weatherIconsMap[main] || sunny;
};