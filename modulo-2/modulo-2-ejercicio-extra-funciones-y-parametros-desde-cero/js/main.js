"use strict";

// Fase 1
console.log("Fase 1");
/* Vamos a crear un repo por persona, y vamos a hacer una función que 
escriba patata 10 veces en la consola la función se llamará ten() */
function ten() {
  for (let i = 0; i < 10; i++) {
    console.log("patata");
  }
}
ten();

// Fase 2
console.log("Fase 2");
/*vamos a modificar nuestra función ten() para que acepte un parámetro 
word, y vamos a llamar a la función 3 veces, pasándole cada vez una 
palabra diferente:*/
function tenWord(word) {
  for (let i = 0; i < 10; i++) {
    console.log(word);
  }
}

tenWord("Patata");
tenWord("Aguacate");
tenWord("Pizza");

// Fase 3
console.log("Fase 3");
/*al llamar a mi función de estas formas escribiese las palabras el 
numero de veces que le diga?*/
function writeThis(word, repeat) {
  for (let i = 0; i < repeat; i++) {
    console.log(word);
  }
}

writeThis("Patata", 10);
writeThis("Aguacate", 7);
writeThis("Pizza", 50);

// Fase 4
console.log("Fase 4");
/* Qué le tendríamos que escribir en nuestra función writeThis para 
que nos escribiese las palabras que le pasamos un número random de 
veces de 0 a 10?*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

writeThis("Patata", getRandomNumber(10));
writeThis("Aguacate", getRandomNumber(10));
writeThis("Pizza", getRandomNumber(10));

// Fase 5
console.log("Fase 5");
/* crearemos una nueva función writeMyArray que aceptará como 
parámetro un array, lo recorrerá y escribirá cada palabra el 
número de veces indicado utilizando nuestra función writeThis*/
const myWordList = [
  {
    text: "Pencil",
    total: 6,
  },
  {
    text: "Thermo",
    total: 2,
  },
  {
    text: "TV",
    total: 8,
  },
  {
    text: "Phone",
    total: 4,
  },
];

function writeMyArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const textArr = arr[i].text;
    const totalArr = parseInt(arr[i].total);
    writeThis(textArr, totalArr);
  }
}
writeMyArray(myWordList);

// Fase 6
console.log("Fase 6");
/* url para que en lugar de tirar de un array metido a fuego 
y azufre en el código, tirásemos de los datos que nos devuelve un servidor.*/

function getMyArray() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const arrayServer = data.results;
      writeMyArray(arrayServer);
    });
}
getMyArray();
