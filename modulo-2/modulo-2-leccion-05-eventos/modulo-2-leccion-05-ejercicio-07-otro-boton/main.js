"use strict";

const button = document.querySelector(".js-button");

function buttonClick(event) {
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedButton = event.currentTarget;

  selectedButton.classList.toggle("button--selected");
}

button.addEventListener("click", buttonClick);
