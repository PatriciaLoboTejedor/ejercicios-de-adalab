import React from "react";

class Hour extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };

    setInterval(() => {
      this.updateHour();
    }, 1000);

    this.updateHour = this.updateHour.bind(this);
  }

  updateHour() {
    const date = new Date();
    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  }

  render() {
    return (
      <div className="App-component">
        <h3>Ejercicio 3: Qué hora será</h3>
        <p>
          Hora actual: {this.state.hours}:{this.state.minutes}:
          {this.state.seconds}
        </p>
      </div>
    );
  }
}

export default Hour;
