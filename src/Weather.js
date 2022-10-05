import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <div className="weatherapp text-center mt-5">
            <form className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  id="search-form"
                  className="form-control search-form"
                  placeholder="Enter City"
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
            <FormattedDate date={weatherData.date} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let city = "Fort Payne";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}
