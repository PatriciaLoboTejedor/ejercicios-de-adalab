"use strict";

// usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
function getEl(classSelection) {
  return document.querySelector(classSelection);
}

// convertimos ese valor a número y lo asignamos a una constante
const classSection = getEl(".js-prueba");
const classNumber = parseInt(classSection.innerHTML);

// usamos nuestra función del ejercicio 4 para saber si es par o impar
function parImpar(number) {
  if (number / 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

const number = 3;
const result = parImpar(number);

// escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'
console.log("El número " + number + " es " + result);
