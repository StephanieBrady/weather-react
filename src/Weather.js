import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "094780c710fa4efd669f0df8c3991927";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <div className="weatherapp text-center mt-5 ">
            <form onSubmit={handleSubmit}>
              <div className="row ">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <div className="weatherapp mt-5">
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>

            <p className="gitHub-link mb-0">
              <i className="fa-solid fa-mountain-sun"></i>
              <a
                href="https://github.com/StephanieBrady/weather-react"
                className="code-id"
                rel="noopener noreferrer"
              >
                {" "}
                Open-source code
              </a>{" "}
              by Stephanie Brady
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    search(city);
    return "Loading....";
  }
}
