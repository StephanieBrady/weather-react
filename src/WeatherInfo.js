import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather">
      <div className="container">
        <div className="weatherapp text-center mt-5">
          <div className="WeatherInfo">
            <h1 className="mt-0 mb-0">
              {" "}
              <div className="clearfix weather-temperature">
                <img
                  src={props.data.imgUrl}
                  alt={props.data.description}
                  className="float-left"
                />{" "}
                {props.data.city}
              </div>
            </h1>
            <h2> {props.data.temperature}°C</h2>
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
