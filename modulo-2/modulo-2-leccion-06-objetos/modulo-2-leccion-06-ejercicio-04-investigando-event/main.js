"use strict";

const button = document.querySelector(".js-button");

function buttonClick() {
  button.classList.toggle("button--selected");

  // Loguear el objeto event para investigar
  console.log(event);
  console.log(event.type); // es una propiedad
}

button.addEventListener("click", buttonClick);
