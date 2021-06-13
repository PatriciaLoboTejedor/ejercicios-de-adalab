import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    console.log(this.props);
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    /*let propsWidth = "400";
    let propsHeight = "200";
    if (props.width !== undefined) {
      propsWidth = props.width;
    }
    if (props.height !== undefined) {
      propsHeight = props.height;
    }*/

    const width = this.props.width != null ? this.props.width : 400;
    const height = this.props.height != null ? this.props.height : 200;
    return (
      <img
        src={`http://lorempixel.com/${width}/${height}/cats/${randomCat}`}
        alt="Random cat"
      />
    );
  }
}

export default RandomCat;
