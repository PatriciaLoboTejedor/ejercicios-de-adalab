import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(20);
  const [present, setPresents] = useState(1);

  const handleClickNumber = () => {
    setNumber(number + 1);
  };
  const handleClickPresent = () => {
    setPresents(present + 1);
  };
  return (
    <div className="App">
      <div className="App-component">
        <button onClick={handleClickNumber}>Hazme más viejo</button>
        <p>Hoy tengo {number} años de edad</p>
        <button onClick={handleClickPresent}>Dame regalos</button>
        <p>Tengo {present} regalo</p>
      </div>
    </div>
  );
};

export default App;
