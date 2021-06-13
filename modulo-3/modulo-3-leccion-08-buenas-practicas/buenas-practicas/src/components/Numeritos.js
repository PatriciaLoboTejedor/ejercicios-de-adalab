import "../stylesheets/App.scss";
import React, { useState } from "react";

function Numeritos() {
  const [numbers, setNumbers] = useState([1, 4, 6, 8, 45, 89]);

  const biggerThan = (eve) => {
    if (eve.target.value) {
      return setNumbers(numbers.filter((n) => n >= parseInt(eve.target.value)));
    } else {
      return setNumbers(numbers);
    }
  };

  const evenNumbers = (eve) => {
    if (eve.target.checked) {
      return setNumbers(numbers.filter((n) => n % 2 === 0));
    } else {
      return setNumbers(numbers);
    }
  };

  return (
    <div className="App">
      <h1>Numeritos</h1>
      <form className="App-component">
        <label>Números mayores que:</label>
        <input
          type="number"
          placeholder="Escribe tu número"
          onChange={biggerThan}></input>
        <label>
          Números pares:
          <input type="checkbox" onChange={evenNumbers}></input>
        </label>
      </form>
      <ul className="App-component">
        {" "}
        Listado de números:
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Numeritos;
