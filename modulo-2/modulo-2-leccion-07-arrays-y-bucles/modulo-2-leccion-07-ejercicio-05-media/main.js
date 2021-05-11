"use strict";

// 1- Creamos un array
const numbers = [1, 6, 8, 7, 4];

// 2- Mediante un bucle calcular la media de los números
let acc = 0;
for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
}
// Logueamos el resultado en la consola y lo conprobamos
console.log("La media del array numbers es " + acc / numbers.length);

// 3- Añadir nuevo número al array
numbers[5] = 3;
console.log(numbers); // Pintar el array para ver que se ha añadido

// 4- Mediante un bucle calcular la media de los números
let acc2 = 0;
for (let i = 0; i < numbers.length; i++) {
  acc2 += numbers[i];
}
//// Logueamos el resultado en la consola y lo conprobamos
console.log("La media del array numbers es " + acc2 / numbers.length);

// 5- Creamos una función que calula la media del array
// (de cualquier longitud) y devuelve la media
function average(numbers) {
  let acumulador = 0;
  for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];
  }
  console.log("La media del array numbers es " + acumulador / numbers.length);
}
average(numbers);
