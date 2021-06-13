import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: "squareBlue",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      styling: prevState.styling === "squareBlue" ? "squareRed" : "squareBlue",
    }));
  }

  render() {
    return (
      <div className="App-component">
        <h3>Ejercicio 2: El cuadrado parpadeante</h3>
        <div className={this.state.styling} onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default Square;
