"use strict";

function getEl(a) {
  return document.querySelector(a);
}

const classQuery = getEl(".js-prueba");
classQuery.innerHTML = "Hola mundo";

console.log(classQuery.innerHTML);
