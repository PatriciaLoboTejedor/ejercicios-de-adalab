"use strict";

let number = 5;

function isEven(number) {
  const module = number % 2;
  if (module === 1) {
    return "impar";
  } else {
    return "par";
  }
}

const result = isEven(number);
console.log("El número " + number + " es " + result);
