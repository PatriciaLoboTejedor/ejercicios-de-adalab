import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parragraph: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      parragraph: ev.target.value,
    });
  }

  render() {
    return (
      <div className="App-component">
        <h3>Ejercicio 1: Mostrando info relacionada</h3>
        <input type="text" onChange={this.handleChange} />
        <p>Párrafo: {this.state.parragraph}</p>
      </div>
    );
  }
}

export default Info;
