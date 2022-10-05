import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-5">
        {" "}
        <div className="clearfix weather-temperature">
          <img
            src={props.weatherData.imgUrl}
            alt={props.weatherData.description}
            className="float-left"
          />{" "}
          {props.weatherData.city}
        </div>
      </h1>
      <h1 className> {props.weatherData.temperature}°C</h1>
      <h5 className="text-capitalize">
        {props.weatherData.description} <br />
        {props.weatherData.wind} km/h
        <br />
        {props.weatherData.humidity}% Humidity <br />
      </h5>
      <h4>
        <FormattedDate date={props.weatherData.data} />
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
  );
}
