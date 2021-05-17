"use strict";
// Enunciado
/*  1. Mostrar una frase que indique cuántas tareas hay.
    2. Pintar todas las tareas en pantalla.
    3. Tachar las ya realizadas.
    4. Permitir marcar una tarea como 'completa' o 'incompleta'.*/

// Array de tareas dado
const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
  { name: "Aprender bien JS JavaScript", completed: false },
];

// Constante con las secciones del html sobre las que escribiremos
const text = document.querySelector(".js-text"); // Párrafo con info
const ulList = document.querySelector(".js-list"); // Listado

// 1. Mostrar una frase que indique cuántas tareas hay
text.innerHTML += `<p>Hay ${tasks.length} tareas</p>`;

// 2. Pintar todas las tareas en pantalla.
// 3. Tachar las ya realizadas.
// 4. Permitir marcar una tarea como 'completa' o 'incompleta'.

// Proceso 1
/* - Cuando arranque la página se debe pintar el listado de tareas
   - Escuchar un evento sobre las tareas pintadas */
function paintTasks() {
  let html = "";
  let className = "";
  let checked = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (task.completed === true) {
      className = "completed-task";
      checked = "checked";
    } else {
      className = "";
      checked = "";
    }
    html += `<li class="${className}">`;
    html += `<input type="checkbox" class="js-checkbox" value="${i}" ${checked}/>`;
    html += `${task.name} </li>`;
  }
  ulList.innerHTML = html;
  listenClick();
}
paintTasks();

// Proceso 2
/* - Una vez la usuaria haya clikado:
      - Recoger en que elemento se ha hecho click
      - Modificar los datos (estado de la tarea)
      - Volver a pintar las tareas
      - Escuchar evento */
function listenClick() {
  const checkboxElements = document.querySelectorAll(".js-checkbox");
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener("change", handlerCheck);
  }
}

function handlerCheck(event) {
  console.log(event.target.value);
  const clicked = event.target.value;
  /*tasks[clicked].completed = !tasks[clicked].completed;*/
  if (tasks[clicked].completed === true) {
    tasks[clicked].completed = false;
  } else {
    tasks[clicked].completed = true;
  }
  paintTasks();

  /*// Bucle que recorra el array para extraer los true y false en completed
  for(let i = 0; i < clicked.length; i++)
  // TAREAS TOTALES
  //Escribo las tares completas o incompletas en el parrafo
  const results = `Tienes ${tasks.length} tareas. ${tasks.completed} completadas y ${tasks.completed} por realizar`;
  //Añado párrafo para las Tareas totales
  text.innerHTML = `<p class="${results}"></p>`;*/
}
