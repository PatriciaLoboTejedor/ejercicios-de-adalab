import React from "react";

class OnionHater extends React.Component {
  onChangeListener(ev) {
    const textAreaValue = ev.target.value;
    if (textAreaValue.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  }

  render() {
    return (
      <textarea
        className="App-component"
        onChange={this.onChangeListener}
        placeholder="OnionHater"
      ></textarea>
    );
  }
}

export default OnionHater;
