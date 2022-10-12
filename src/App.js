import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Chattanooga" />
    </div>
  );
}

export default App;
