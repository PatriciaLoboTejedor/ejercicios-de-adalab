"user strict";

//OPTION1 - ESCRIBIR Y REASIGNAR CLASES CON CONSTANTES
const text = document.querySelector("body");
text.innerHTML =
  "<p class='js-text'>El nombre de mi compañera es <span class='js-name'>Leticia Fernández Sánchez</span>, y está compuesto por <span class='js-number'> 23 </span> caracteres</p>";

const name = document.querySelector(".js-name");
name.innerHTML = "Rosa Berned";

const number = document.querySelector(".js-number");
number.innerHTML = name.innerHTML.length;

console.log(name);

//OPTION2 - CONSTANTES + ESCRIBIR CONCATENANDO CONSTANTES
/*const name = "Rosa Berned";
const number = name.length;

const text = document.querySelector("body");

text.innerHTML =
  "El nombre de mi compañera es " +
  name +
  ", y está compuesto por " +
  number +
  " caracteres";

console.log(number);*/
