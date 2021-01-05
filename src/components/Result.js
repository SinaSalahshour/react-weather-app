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

const Result = ({
  name,
  country,
  temp,
  lowTemp,
  highTemp,
  humidity,
  wind,
  feelsLike,
  main,
  desc,
}) => {
  let weatherIcon = null;

  if (main === "Thunderstorm") {
    weatherIcon = <FaBolt className="weather-icon" />;
  } else if (main === "Drizzle") {
    weatherIcon = <FaCloudRain className="weather-icon" />;
  } else if (main === "Rain") {
    weatherIcon = <FaCloudShowersHeavy className="weather-icon" />;
  } else if (main === "Snow") {
    weatherIcon = <FaSnowflake className="weather-icon" />;
  } else if (main === "Clear") {
    weatherIcon = <FaSun className="weather-icon" />;
  } else if (main === "Clouds") {
    weatherIcon = <FaCloud className="weather-icon" />;
  } else {
    weatherIcon = <FaSmog className="weather-icon" />;
  }

  return (
    <div className="result-div">
      <div className="weather-result-div">
        <div className="weather-main">
          <div className="weather-icon">{weatherIcon}</div>
          <div className="weather-temp-desc">
            <h1 className="weather-temperature">{temp}</h1>
            <div className="weather-description">{main}</div>
          </div>
        </div>
        <div className="weather-stats">
          <div className="weather-stats-grid"></div>
        </div>
      </div>
      <div>{weatherIcon}</div>
    </div>
  );
};

export default Result;
