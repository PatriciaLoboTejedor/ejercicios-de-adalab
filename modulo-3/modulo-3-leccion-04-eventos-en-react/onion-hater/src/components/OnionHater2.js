import React from "react";

class OnionHater2 extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChangeOnion = this.handleChangeOnion.bind(this);
  }

  handleChangeOnion(ev) {
    const textAreaValue = ev.target.value.toLowerCase();

    if (textAreaValue === "cebolla") {
      this.isHating = true;
    } else {
      this.isHating = false;
    }

    this.forceUpdate();
  }

  render() {
    return (
      <div className={this.isHating === true ? "App-onion" : "App-component"}>
        <textarea
          className="App-component"
          onChange={this.handleChangeOnion}
          placeholder="OnionHater2"></textarea>
      </div>
    );
  }
}

export default OnionHater2;
