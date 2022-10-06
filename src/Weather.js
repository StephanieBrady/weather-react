import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function search() {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <div className="weatherapp text-center mt-5">
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  id="search-form"
                  className="form-control search-form"
                  placeholder="Enter City"
                  onChange={handleCityChange}
                />
                <span className="input-group-btn">
                  <button
                    id="search-this"
                    type="submit"
                    className="pull-right btn btn-default search-btn"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </span>{" "}
                <button
                  id="currentLocationButton"
                  type="submit"
                  className="currentLocationButton"
                >
                  Current Location
                </button>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
