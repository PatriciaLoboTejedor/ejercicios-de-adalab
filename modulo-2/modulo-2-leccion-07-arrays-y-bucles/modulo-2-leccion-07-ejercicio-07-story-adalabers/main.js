"use strict";

// Lista de adalabers (array con objetos dentro)
const adalabers = [
  {
    name: "María",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "Ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora",
  },
];

// Una función countAdalabers que devuelve el número de adalabers en el listado.
function countAdalabers(arr) {
  console.log(arr.length);
}
countAdalabers(adalabers);

// Una función averageAge que devuelve la media de edad de listado
function averageAge(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i].age;
  }
  console.log("La media del array numbers es " + acc / arr.length);
}
averageAge(adalabers);

// Una función theYoungest que devuelve el nombre de la adalaber más joven.
function theYoungest(arr) {
  arr.sort((a, b) => a.age - b.age);
  console.log(`La adalaber más joven es ${adalabers[0].name}`);
}
theYoungest(adalabers);

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras - MAL
function countDesigners(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (adalabers[i].job === "diseñadora") {
      acc += 1;
    }
  }
  return acc;
}
console.log(`${countDesigners(adalabers)} adalabers son diseñadoras`);
