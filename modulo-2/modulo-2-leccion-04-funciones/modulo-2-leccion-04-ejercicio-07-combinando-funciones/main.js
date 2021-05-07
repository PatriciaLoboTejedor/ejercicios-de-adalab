"use strict";

// usando nuestra función getEl accedemos al párrafo,
function getEl(classSelection) {
  return document.querySelector(classSelection);
}
// y recogemos su valor (con innerHTML)
const numberElement = getEl(".js-prueba").innerHTML;

// convertimos ese valor a número y lo asignamos a una constante
const classNumber = parseInt(numberElement);

// usamos nuestra función del ejercicio 4 para saber si es par o impar
function isEven(classNumber) {
  const module = classNumber % 2;
  if (module === 1) {
    return "impar";
  } else {
    return "par";
  }
}

const result = isEven(classNumber);

// escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'
console.log("El número " + classNumber + " es " + result);
