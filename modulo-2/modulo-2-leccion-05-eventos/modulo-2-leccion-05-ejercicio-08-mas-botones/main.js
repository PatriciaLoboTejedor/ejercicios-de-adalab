"use strict";

const button1 = document.querySelector(".js-button1");
const button2 = document.querySelector(".js-button2");

function buttonClick(event) {
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedButton = event.currentTarget;

  selectedButton.classList.toggle("button--selected");
}

button1.addEventListener("click", buttonClick);
button2.addEventListener("click", buttonClick);
