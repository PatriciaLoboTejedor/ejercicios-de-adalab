"user strict";

const text = document.querySelector("body");
text.innerHTML +=
  "<p class='js-text'>El nombre de mi compañera es <span class='js-surname'>Leticia Fernández Sánchez</span>, y está compuesto por <span class='js-number'> 23 </span>caracteres</p>";

const surname = document.querySelector(".js-surname");
surname.innerHTML = "Rosa Berned";

const number = document.querySelector(".js-number");
number.innerHTML = surname.lenght;

console.log(number);
