import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather ">
      <div className="container ">
        <div className="weatherapp text-center mt-5">
          <div className="WeatherInfo">
            <h1 className="mt-1 mb-0">{props.data.city}</h1>
            <h2>
              <WeatherTemperature celsius={props.data.temperature} />
            </h2>
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} size={52} />
              </div>
            </div>
            <h5 className="text-capitalize">
              {props.data.description} <br />
              {props.data.wind} km/h
              <br />
              {props.data.humidity}% Humidity <br />
            </h5>
            <h4>
              <FormattedDate date={props.data.date} />
            </h4>
            <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}
