import React from "react";
import {
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudRain,
  FaBolt,
  FaSun,
  FaSmog,
  FaSnowflake
} from "react-icons/fa";

const Result = ({
  name,
  temp,
  lowTemp,
  highTemp,
  humidity,
  wind,
  feelsLike,
  main,
  desc
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
    <div className="result-div">
      <h1>City: {name}</h1>
      <h1>Temperature: {temp}</h1>
      <h1>Lowest Temperature: {lowTemp}</h1>
      <h1>Highest Temperature: {highTemp}</h1>
      <h1>Humidity: {humidity}%</h1>
      <h1>Wind Speed: {wind}mph</h1>
      <h1>Feels Like: {feelsLike}</h1>
      <h1>{main}</h1>
      <h1>{desc}</h1>
      <div>{weatherIcon}</div>
    </div>
  );
};

export default Result;
