const BASE_URL = "https://api.openweathermap.org/data/2.5";
const KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function getCurrentWeather (city) {
    try {
        const url = `${BASE_URL}/weather?q=${city}&appid=${KEY}&units=metric`;

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Не удалось получить данные о погоде");
        }

        const data = await res.json();

        const precipitation = data.rain?.["1h"] || data.snow?.["1h"] || 0;

        return {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        description: data.weather[0].description,
        precipitation: precipitation,
        icon: data.weather[0].icon,
        };

    } catch (error) {
        console.error("Ошибка в getCurrentWeather:", error);
        return null;
    }
}

export default getCurrentWeather


