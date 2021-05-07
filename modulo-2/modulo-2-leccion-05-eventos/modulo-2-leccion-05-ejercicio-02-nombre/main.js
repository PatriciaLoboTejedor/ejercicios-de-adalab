"use strict";

const button = document.querySelector(".js-button");

function sayHey() {
  let input = document.querySelector(".js-input").value;
  console.log("Hola " + input);
}

button.addEventListener("click", sayHey);
