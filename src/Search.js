import React from "react";

export default function Search() {
  return (
    <form>
      <input type="search" placeholder="Enter a city.." />
      <button type="Submit">Search</button>
      <button>Current Location</button>
    </form>
  );
}
