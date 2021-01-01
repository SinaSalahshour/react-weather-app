import React, { useEffect, useState } from "react";

import { KEY } from "./api";
import Result from "./Result";
import SearchBar from "./SearchBar";

const WeatherFetch = () => {
  const [query, setQuery] = useState("london");
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState("");
  const [highTemp, setHighTemp] = useState("");
  const [lowTemp, setLowTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [feelsLike, setFeelsLike] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const key = KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`
      );
      const data = await response.json();
      setTemp(Math.floor(data.main.temp));
      setHighTemp(Math.floor(data.main.temp_max));
      setLowTemp(Math.floor(data.main.temp_min));
      setWind(data.wind.speed);
      setHumidity(data.main.humidity);
      setFeelsLike(Math.floor(data.main.feels_like));
      console.log(data);
    };
    getWeather();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <SearchBar
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
      />
      <Result
        name={query}
        temp={temp}
        highTemp={highTemp}
        lowTemp={lowTemp}
        humidity={humidity}
        wind={wind}
        feelsLike={feelsLike}
      />
    </>
  );
};

export default WeatherFetch;
