"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// Pintar una tarea en una lista html
// si su estado es completed:true aparece tachada
const task = document.querySelectorAll("ul");

function addTask1(event) {
  const task1 = event.target("li");
  task1.innerHTML = "Recoger setas en el campo";
}
addTask1(event);
