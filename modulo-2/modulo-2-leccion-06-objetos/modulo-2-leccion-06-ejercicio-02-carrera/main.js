"use strict";

// Objeto
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

// Método con función arrow sin parámetros
adalaber1.run = () => `Estoy corriendo`;
console.log(adalaber1.run());

// Método con arrow con un parámetro
adalaber1.runAMarathon = (distance) =>
  `Estoy corriendo una maratón de ${distance} kilómetros`;
console.log(adalaber1.runAMarathon(50));
