import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  let weatherData = {
    city: "Fort Payne",
    temperature: 80,
    date: "Tuesday, September 6",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 6,
  };

  if (ready) {
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
            <h1 className="mt-5">
              {" "}
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />{" "}
                {weatherData.city}
              </div>
            </h1>
            <h1 className> {weatherData.temperature}°F</h1>
            <h5>
              {weatherData.description} <br />
              {weatherData.wind} mph <br />
              {weatherData.humidity}% Humidity <br />
            </h5>
            <h4>
              {weatherData.date}
              <br />
              {weatherData.time}
            </h4>
            <br /> <br />
            <p class="gitHub-link">
              <i class="fa-solid fa-mountain-sun"></i>
              <a
                href="https://github.com/StephanieBrady/weather-react"
                class="code-id"
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
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
