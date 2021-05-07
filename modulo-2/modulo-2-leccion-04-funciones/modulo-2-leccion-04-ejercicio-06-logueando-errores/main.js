"use strict";

// Al recoger el elemento de HTML vamos a guardarlo en una constante.
function getEl(a) {
  const element = document.querySelector(a);
  // Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola
  if (element === null) {
    console.error("No existe ningún elemento con clase, id o tag llamado " + a);
  } else if (element !== null) {
    return element;
  }
}

// Finalmente tras nuestro condicional retornaremos la constante con el elemento.
const classQuery = getEl(".js-prueba");
classQuery.innerHTML = "Hola mundo";

/*si no indico argumento a la funcion (en const classQuery) me sale el mensaje, y tambien el error 
porque no se queda bien definido el innerHTML*/
