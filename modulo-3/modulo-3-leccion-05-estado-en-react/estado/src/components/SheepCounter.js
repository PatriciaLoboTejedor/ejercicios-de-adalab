import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div className="App-component">
        <h3>Ejercicio 4: Contador de ovejas</h3>
        <button onClick={this.handleClick}>Contador de Ovejas</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default SheepCounter;
