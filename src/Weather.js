import React from "react";
import Search from "./Search";

export default function Weather() {
  let weatherData = {
    city: "Fort Payne",
    temperature: 80,
    date: "Tuesday, September 6",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 6,
  };

  return (
    <div className="weather">
      <div className="container">
        <div className="weatherapp text-center">
          <Search />
          <h1>{weatherData.city}</h1>
          <h3>
            {" "}
            {weatherData.temperature}°F
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
          </h3>
          <h4>
            {weatherData.date}
            <br />
            {weatherData.time}
          </h4>
          <h5>
            {weatherData.description} <br />
            {weatherData.wind} mph <br />
            {weatherData.humidity}% Humidity <br />
          </h5>
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
}
