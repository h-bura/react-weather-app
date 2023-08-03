import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import Search from "./components/search/Search";
import { WEATHER_API_URL } from "./api";
import Forecast from "./components/forecast/Forecast";

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY.replace(/"/g, "")
    .replace(/'/g, "")
    .slice(0, -1);
  console.log(WEATHER_API_URL, "weather url");

  console.log(apiKey, typeof apiKey);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
