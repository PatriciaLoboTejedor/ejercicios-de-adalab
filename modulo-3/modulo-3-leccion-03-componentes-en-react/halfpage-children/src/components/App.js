import React from "react";
import "./App.css";
import HalfPage from "./HalfPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HalfPage>
          <h1>Izquierda</h1>
          <p>Estoy en la izquierda</p>
        </HalfPage>
        <HalfPage>
          <h2>Derecha</h2>
          <p>Estoy en la derecha</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
