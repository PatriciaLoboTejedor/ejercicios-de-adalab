import React from "react";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
    this.getInputTextValue = this.getInputTextValue.bind(this);
  }

  componentDidMount() {
    // Recojo lo que haya guardado en el localStorage y lo pinto como estado
    const inputTextValue = localStorage.getItem("inputTextClass");
    this.setState({
      inputText: inputTextValue,
    });
  }

  componentWillUnmount() {
    // guardo el valor del input en el localStorage
    localStorage.setItem("inputTextClass", this.state.inputText);
  }

  getInputTextValue(ev) {
    // Recojo el valor del input y actualizo el estado
    this.setState({
      inputText: ev.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <label>Input Componente Clase</label>
        <input type="text" onChange={this.getInputTextValue} />
      </div>
    );
  }
}

export default Text;
