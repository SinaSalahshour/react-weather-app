import React, { useEffect, useState } from "react";
import moment from "moment";

import { KEY } from "./api";
import ForecastResult from "./ForecastResult";
import Loading from "./Loading";
import NotFound from "./NotFound";
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
  const [loading, setLoading] = useState(true);

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
        moment.unix(data.sys.sunrise)
      );
      setSunset(
        moment.unix(data.sys.sunset)
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
      setLoading(false);
      const dailyData = data.list
        .filter((reading) => {
          return reading.dt_txt.includes("18:00:00");
        })
        .slice(1);

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
      {loading ? (<Loading />) : name ? (
        <>
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
            sunrise={moment(sunrise).format("HH:mm")}
            sunset={moment(sunset).format("HH:mm")}
            main={main}
            desc={desc}
          />
          <hr className="weather-fetch-line" />
          <div className="forecast-div">{forecastMap()}</div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default WeatherFetch;
