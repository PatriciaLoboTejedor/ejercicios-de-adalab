"user strict";

//SECOND OPTION - CONCATENACION - CONSOLA
const hey = "Hola ";
const principal = "Lola";
const text = ", encantada de conocerte.";

const phrase = hey + principal + text;

console.log(phrase);

//THIRD OPTION - CONCATENACION - BODY
const halo = "Hola ";
const person = "Maria";
const parragraph = ", encantada de conocerte.";

const section = document.querySelector("body");
section.innerHTML += halo + person + parragraph;

console.log(section);
