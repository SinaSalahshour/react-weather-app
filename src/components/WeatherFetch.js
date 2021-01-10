import React, { useEffect, useState } from "react";

import { KEY } from "./api";
import ForecastResult from "./ForecastResult";
import Result from "./Result";
import SearchBar from "./SearchBar";
import "./WeatherFetch.css";

const WeatherFetch = () => {
  const [query, setQuery] = useState("london");
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [highTemp, setHighTemp] = useState("");
  const [lowTemp, setLowTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [main, setMain] = useState("");
  const [desc, setDesc] = useState("");
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const key = KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`
      );
      const data = await response.json();

      setName(data.name);
      setCountry(data.sys.country);
      setTemp(Math.floor(data.main.temp));
      setHighTemp(Math.floor(data.main.temp_max));
      setLowTemp(Math.floor(data.main.temp_min));
      setWind(data.wind.speed);
      setHumidity(data.main.humidity);
      setSunrise(
        new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5)
      );
      setSunset(
        new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 5)
      );
      setMain(data.weather[0].main);
      setDesc(data.weather[0].description);
      console.log(data);
    };
    getWeather();
  }, [query]);

  useEffect(() => {
    const getForecast = async () => {
      const key = KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${key}`
      );
      const data = await response.json();
      const dailyData = data.list.filter((reading) => {
        return reading.dt_txt.includes("18:00:00");
      }).slice(1);
      setDailyForecast(dailyData);
      console.log(dailyData);
    };
    getForecast();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const forecastMap = () => {
    return dailyForecast.map((reading, index) => (
      <ForecastResult reading={reading} key={index} />
    ));
  };

  return (
    <div className="weather-app-main container">
      <SearchBar
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
      />
      <div className="weather-name">
        {name}, {country}
      </div>
      <Result
        name={name}
        country={country}
        temp={temp}
        highTemp={highTemp}
        lowTemp={lowTemp}
        humidity={humidity}
        wind={wind}
        sunrise={sunrise}
        sunset={sunset}
        main={main}
        desc={desc}
      />
      <div className="forecast-div">{forecastMap()}</div>
    </div>
  );
};

export default WeatherFetch;
