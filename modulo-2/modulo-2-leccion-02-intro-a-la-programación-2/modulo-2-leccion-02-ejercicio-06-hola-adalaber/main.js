"user strict";

//FIRST OPTION - NUEVA CLASE - BODY
const hello = document.querySelector("body");

hello.innerHTML +=
  "<h1>Hola <span class='js-name'>Lola</span>, encantada de conocerte.</h1>";

const name = document.querySelector(".js-name");
name.innerHTML = "Patricia";

console.log(name);
