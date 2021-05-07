"use strict";

const text = document.querySelector(".js-text");
const button = document.querySelector(".js-button");

button.addEventListener(
  "click",
  () => (text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!")
);
