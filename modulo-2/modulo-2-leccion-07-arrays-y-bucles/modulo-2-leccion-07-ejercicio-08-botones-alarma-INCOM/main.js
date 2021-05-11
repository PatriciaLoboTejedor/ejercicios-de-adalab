"use strict";

const button = document.querySelectorAll("button");
const body = document.querySelector("js-background");

// Iteramos sobre todos los botones para asignarle al body una clase
function buttonClick() {
  body.classList.toggle("background-red");
  body.classList.toggle("background-white");
}

button.addEventListener("click", buttonClick);

/*button.addEventListener("click", () => {
  body.classList.toggle("background-red");
});*/
