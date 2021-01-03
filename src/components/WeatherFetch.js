import React, { useEffect, useState } from "react";

import { KEY } from "./api";
import Result from "./Result";
import SearchBar from "./SearchBar";

const WeatherFetch = () => {
  const [query, setQuery] = useState("london");
  const [search, setSearch] = useState("");
  const [name, setName] = useState("")
  const [temp, setTemp] = useState("");
  const [highTemp, setHighTemp] = useState("");
  const [lowTemp, setLowTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [main, setMain] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const key = KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`
      );
      const data = await response.json();
      setName(data.name)
      setTemp(Math.floor(data.main.temp));
      setHighTemp(Math.floor(data.main.temp_max));
      setLowTemp(Math.floor(data.main.temp_min));
      setWind(data.wind.speed);
      setHumidity(data.main.humidity);
      setFeelsLike(Math.floor(data.main.feels_like));
      setMain(data.weather[0].main);
      setDesc(data.weather[0].description);
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
        name={name}
        temp={temp}
        highTemp={highTemp}
        lowTemp={lowTemp}
        humidity={humidity}
        wind={wind}
        feelsLike={feelsLike}
        main={main}
        desc={desc}
      />
    </>
  );
};

export default WeatherFetch;
