import React from "react";
import {
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudRain,
  FaBolt,
  FaSun,
  FaSmog,
  FaSnowflake,
} from "react-icons/fa";

import "./Result.css";

const Result = ({
  name,
  country,
  temp,
  lowTemp,
  highTemp,
  humidity,
  wind,
  sunrise,
  sunset,
  main,
  desc,
}) => {
  let weatherIcon = null;

  if (main === "Thunderstorm") {
    weatherIcon = <FaBolt />;
  } else if (main === "Drizzle") {
    weatherIcon = <FaCloudRain />;
  } else if (main === "Rain") {
    weatherIcon = <FaCloudShowersHeavy />;
  } else if (main === "Snow") {
    weatherIcon = <FaSnowflake />;
  } else if (main === "Clear") {
    weatherIcon = <FaSun />;
  } else if (main === "Clouds") {
    weatherIcon = <FaCloud />;
  } else {
    weatherIcon = <FaSmog />;
  }

  return (
    <div className="weather-result-div">
      <div className="weather-main">
        <div className="weather-icon">{weatherIcon}</div>
        <div className="main-and-temp">
          <div className="weather-temperature">{temp}&deg;</div>
          <div className="weather-desc">{desc}</div>
        </div>
      </div>
      <div className="weather-stats">
        <div className="weather-stats-elements high-low">
          <div className="stat-element">&#9650; {highTemp}&deg;</div>
          <hr className="stat-element-line" />
          <div className="stat-element">&#9660; {lowTemp}&deg;</div>
        </div>
        <div className="weather-stats-elements humid-wind">
          <div className="stat-name-up">Humidity</div>
          <div className="stat-element">{humidity}%</div>
          <hr className="stat-element-line" />
          <div className="stat-element">{wind}<span className="mile-per-hour">mph</span></div>
          <div className="stat-name-down">Wind</div>
        </div>
        <div className="weather-stats-elements sunrise-sunset">
          <div className="stat-name-up">Sunrise</div>
          <div className="stat-element">{sunrise}</div>
          <hr className="stat-element-line" />
          <div className="stat-element">{sunset}</div>
          <div className="stat-name-down">Sunset</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
