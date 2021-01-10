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

const ForecastResult = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  let weatherIcon = null;

  if (reading.weather[0].main === "Thunderstorm") {
    weatherIcon = <FaBolt size={60} />;
  } else if (reading.weather[0].main === "Drizzle") {
    weatherIcon = <FaCloudRain size={60} />;
  } else if (reading.weather[0].main === "Rain") {
    weatherIcon = <FaCloudShowersHeavy size={60} />;
  } else if (reading.weather[0].main === "Snow") {
    weatherIcon = <FaSnowflake size={60} />;
  } else if (reading.weather[0].main === "Clear") {
    weatherIcon = <FaSun size={60} />;
  } else if (reading.weather[0].main === "Clouds") {
    weatherIcon = <FaCloud size={60} />;
  } else {
    weatherIcon = <FaSmog size={60} />;
  }

  return (
    <div className="daily-forecast-card">
      <h3 className="forecast-day">{moment(newDate).format("dddd")}</h3>
      <p className="forecast-exact-day">
        {moment(newDate).format("MMMM Do, h:mm a")}
      </p>
      {weatherIcon}
      <h2>{Math.round(reading.main.temp)}°</h2>
      <div className="card-body">
        <p className="card-text">{reading.weather[0].description}</p>
      </div>
    </div>
  );
};

export default ForecastResult;
