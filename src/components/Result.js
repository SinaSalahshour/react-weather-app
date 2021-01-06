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
    weatherIcon = <FaBolt size={180} />;
  } else if (main === "Drizzle") {
    weatherIcon = <FaCloudRain size={180} />;
  } else if (main === "Rain") {
    weatherIcon = <FaCloudShowersHeavy size={180} />;
  } else if (main === "Snow") {
    weatherIcon = <FaSnowflake size={180} />;
  } else if (main === "Clear") {
    weatherIcon = <FaSun size={180} />;
  } else if (main === "Clouds") {
    weatherIcon = <FaCloud size={180} />;
  } else {
    weatherIcon = <FaSmog size={180} />;
  }

  return (
    <div className="weather-result-div">
      <div className="weather-main">
        <div className="weather-city">
          {name}, {country}
        </div>
        <div className="weather-icon">{weatherIcon}</div>
        <div className="weather-temperature">
          {temp}&deg; {main}
        </div>
      </div>
      <div className="weather-stats">
        <div className="weather-stats-elements high-low">
          <div className="stat-element">&#9650; {highTemp}&deg;</div>
          <hr />
          <div className="stat-element">&#9660; {lowTemp}&deg;</div>
        </div>
        <div className="weather-stats-elements humid-wind">
          <div className="stat-name-up">Humidity</div>
          <div className="stat-element">{humidity}%</div>
          <hr />
          <div className="stat-element">{wind}mph</div>
          <div className="stat-name-down">Wind</div>
        </div>
        <div className="weather-stats-elements sunrise-sunset">
          <div className="stat-name-up">Sunrise</div>
          <div className="stat-element">{sunrise}</div>
          <hr />
          <div className="stat-element">{sunset}</div>
          <div className="stat-name-down">Sunset</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
