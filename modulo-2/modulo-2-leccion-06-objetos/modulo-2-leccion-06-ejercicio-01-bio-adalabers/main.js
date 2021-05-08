"use strict";

// Objeto 1
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

// Escribir una frase en el HTML a partir de las propiedades de un objeto
const textAdalaber1 = document.querySelector(".js-adalaber1");
textAdalaber1.innerHTML =
  "Mi nombre es " +
  adalaber1.name +
  ", tengo " +
  adalaber1.age +
  " años y soy " +
  adalaber1.job;

// Objeto 2
const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
};

// Escribir una frase en el HTML a partir de las propiedades de un objeto
const textAdalaber2 = document.querySelector(".js-adalaber2");
textAdalaber2.innerHTML =
  "Mi nombre es " +
  adalaber2.name +
  ", tengo " +
  adalaber2.age +
  " años y soy " +
  adalaber2.job;
