"use strict";

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un chihuahua";
    });
}
const btn1 = document.querySelector(".js-dog1");
btn1.addEventListener("click", getDogImage);

const btnOther = document.querySelector(".js-dog2");
btnOther.addEventListener("click", getDogImage);
