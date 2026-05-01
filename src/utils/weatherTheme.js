import { getCityTime } from "./time";

export const getDayPeriod = (weather) => {
  if (!weather) return "day";

  const cityTime = getCityTime(weather.timezone).getTime();

  const sunrise = weather.sunrise.getTime();
  const sunset = weather.sunset.getTime();

  // ночь (до рассвета)
  if (cityTime < sunrise) return "night";

  // ночь (после заката)
  if (cityTime > sunset) return "night";

  const dayDuration = sunset - sunrise;

  const morningEnd = sunrise + dayDuration * 0.25;
  const eveningStart = sunrise + dayDuration * 0.75;

  if (cityTime < morningEnd) return "morning";
  if (cityTime < eveningStart) return "day";

  return "evening";
};

export const getBackground = (weather) => {
  const period = getDayPeriod(weather);

  switch (period) {
    case "morning":
      return "morning";
    case "day":
      return "day";
    case "evening":
      return "evening";
    case "night":
      return "night";
  }
};