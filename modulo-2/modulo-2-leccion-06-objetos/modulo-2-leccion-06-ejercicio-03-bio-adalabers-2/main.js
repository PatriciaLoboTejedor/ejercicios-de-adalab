"use strict";

// Objeto 1
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

// Crear un método con datos del objeto
adalaber1.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.job
  );
};

// Escribir en la consola el método
console.log(adalaber1.showBio());

// Objeto 2
const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
};

// Crear un método con datos del objeto
adalaber2.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.job
  );
};

// Escribir en la consola el método
console.log(adalaber2.showBio());
