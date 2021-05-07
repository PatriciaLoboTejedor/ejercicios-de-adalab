"use strict";

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

/*si inviertes el orden de los console.log el 
console.log(secretLetter) devuelve 'y' porque cuando 
se encuentra primero, lee primero la variable y luego
actua la función.*/
