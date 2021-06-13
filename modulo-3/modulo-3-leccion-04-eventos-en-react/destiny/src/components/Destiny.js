import React from "react";
import CityImage from "./CityImage";
import "./App.css";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeListener = this.onChangeListener.bind(this);
  }

  onChangeListener(ev) {
    this.selectValue = ev.target.value;
    /*alert(`Tu destino es viajar a ${this.selectValue}`);*/
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <select className="App-component" onChange={this.onChangeListener}>
          <option>Buenos Aires</option>
          <option>Sydney</option>
          <option>Praga</option>
          <option>Boston</option>
          <option>Tokio</option>
        </select>
        <CityImage city={this.selectValue} />
      </div>
    );
  }
}

export default Destiny;
