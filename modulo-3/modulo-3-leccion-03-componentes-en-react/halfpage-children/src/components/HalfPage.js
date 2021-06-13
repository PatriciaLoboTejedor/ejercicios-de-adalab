import React from "react";
import "./HalfPage.css";

class HalfPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="halfPage">{this.props.children}</div>;
  }
}

export default HalfPage;
