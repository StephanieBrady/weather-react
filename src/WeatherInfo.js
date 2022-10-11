import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather ">
      <div className="container ">
        <div className="weatherapp text-center mt-5">
          <div className="WeatherInfo">
            <h1 className="mt-1 mb-0">{props.data.city}</h1>
            <h2>
              <span className="clearfix weather-temperature">
                <span className="float-left">
                  <WeatherIcon code={props.data.icon} size={50} />
                </span>
                {""} {""}
                {""} {""}
                {Math.round(props.data.temperature)}
              </span>
            </h2>

            <h5 className="text-capitalize">
              {props.data.description} <br />
              {props.data.wind} km/h
              <br />
              {props.data.humidity}% Humidity <br />
            </h5>
            <h4>
              <FormattedDate date={props.data.date} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
