import React from "react";

export default function Search() {
  return (
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
  );
}
