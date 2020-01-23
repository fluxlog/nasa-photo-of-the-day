import React, {useEffect, useState} from "react";
import "./App.css";
import NasaData from "./NasaData"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaData />
    </div>
  );
}

export default App;
