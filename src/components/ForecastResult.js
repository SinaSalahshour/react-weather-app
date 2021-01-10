import React from "react";
import moment from "moment";
import {
  FaBolt,
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaSmog,
  FaSnowflake,
  FaSun,
} from "react-icons/fa";

import "./ForecastResult.css";

const ForecastResult = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  let weatherIcon = null;

  if (reading.weather[0].main === "Thunderstorm") {
    weatherIcon = <FaBolt size={60} className="forecast-icon" />;
  } else if (reading.weather[0].main === "Drizzle") {
    weatherIcon = <FaCloudRain size={60} className="forecast-icon" />;
  } else if (reading.weather[0].main === "Rain") {
    weatherIcon = <FaCloudShowersHeavy size={60} className="forecast-icon" />;
  } else if (reading.weather[0].main === "Snow") {
    weatherIcon = <FaSnowflake size={60} className="forecast-icon" />;
  } else if (reading.weather[0].main === "Clear") {
    weatherIcon = <FaSun size={60} className="forecast-icon" />;
  } else if (reading.weather[0].main === "Clouds") {
    weatherIcon = <FaCloud size={60} className="forecast-icon" />;
  } else {
    weatherIcon = <FaSmog size={60} className="forecast-icon" />;
  }

  return (
    <div className="daily-forecast-card">
      <div className="forecast-day">{moment(newDate).format("dddd")}</div>
      <div className="forecast-exact-day">{moment(newDate).format("MMMM Do")}</div>
      {weatherIcon}
      <h2 className="forecast-temp">{Math.round(reading.main.temp)}°</h2>
      <div className="forecast-desc">{reading.weather[0].description}</div>
    </div>
  );
};

export default ForecastResult;
