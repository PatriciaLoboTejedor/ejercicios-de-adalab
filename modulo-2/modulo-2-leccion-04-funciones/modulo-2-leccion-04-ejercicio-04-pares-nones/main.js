"use strict";

let number = 5;

function parImpar(number) {
  if (number / 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

const result = parImpar(number);
console.log("El número " + number + " es " + result);
