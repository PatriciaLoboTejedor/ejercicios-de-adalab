"use strict";

// Array de cadenas
const movies = ["los 100", "outlander", "black mirror"];

// Añadir un elemento al array anterior
movies[3] = "Jane the virgin";
console.log(movies);

// Modificar un elemento al array anterior
movies[2] = "the good doctor";
console.log(movies);

// Encapsular todo el código que hemos creado en una función que no toma parámetros
function workWithMovies() {
  return console.log(movies);
}

// Ejecutamos la función para mostra en la consola
workWithMovies();
