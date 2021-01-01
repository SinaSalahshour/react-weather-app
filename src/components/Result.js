import React from "react";

const Result = ({
  name,
  temp,
  lowTemp,
  highTemp,
  humidity,
  wind,
  feelsLike,
}) => {
  return (
    <div className="result-div">
      <h1>City: {name}</h1>
      <h1>Temperature: {temp}</h1>
      <h1>Lowest Temperature: {lowTemp}</h1>
      <h1>Highest Temperature: {highTemp}</h1>
      <h1>Humidity: {humidity}%</h1>
      <h1>Wind Speed: {wind}mph</h1>
      <h1>Feels Like: {feelsLike}</h1>
    </div>
  );
};

export default Result;
