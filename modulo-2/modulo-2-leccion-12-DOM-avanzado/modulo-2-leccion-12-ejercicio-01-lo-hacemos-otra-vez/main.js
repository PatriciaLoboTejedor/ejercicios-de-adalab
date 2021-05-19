"use strict";

const numbers = [1, 2, 3];
const list = document.querySelector(".js-list");

for (const number of numbers) {
  // Creamos un elemento li para cada dato del array
  const newItem = document.createElement("li");
  // Creamos contenido con cada elemento del array
  const newContent = document.createTextNode(number);
  // Metemos cada contenido del array dentro de cada elemento li
  newItem.appendChild(newContent);
  // Metemos los elementos li en el html, dentro de nuestra ul llamada list
  list.appendChild(newItem);
}
