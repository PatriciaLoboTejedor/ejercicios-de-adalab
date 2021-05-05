"use strict";

const button = document.querySelector(".js-button");

// Si contiene la clase warning
if (button.classList.contains("warning")) {
  // Añade el texto
  button.innerHTML = "<h1>AVISO</h1><p>Tenga cuidado</p>";
}
// Si contiene la clase error
if (button.classList.contains("error")) {
  // Añade el texto
  button.innerHTML = "<h1>ERROR</h1><p>Ha surgido un error</p>";
}
// Si contiene la clase success
if (button.classList.contains("success")) {
  // Añade el texto
  button.innerHTML = "<h1>CORRECTO</h1><p>Los datos son correctos</p>";
}
