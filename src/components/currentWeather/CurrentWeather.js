import React from "react";
import "./current-weather.css";
function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">istanbul</p>
          <p className="weather-description">sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">15°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">20°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">15 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">52%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">40 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
