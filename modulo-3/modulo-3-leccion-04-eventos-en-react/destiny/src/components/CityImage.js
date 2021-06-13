import React from "react";
import "./App.css";

function CityImage(props) {
  const city = {
    Praga: "https://via.placeholder.com/210x295/ffffff/666666/?text=Praga",
    Boston: "https://via.placeholder.com/210x295/ffffff/666666/?text=Boston",
    "Buenos Aires":
      "https://via.placeholder.com/210x295/ffffff/666666/?text=BuenosAires",
    Sydney: "https://via.placeholder.com/210x295/ffffff/666666/?text=Sydney",
    Tokio: "https://via.placeholder.com/210x295/ffffff/666666/?text=Tokio",
  };
  return <img className="image" src={city[props.city]} alt={props.city} />;
}

export default CityImage;
