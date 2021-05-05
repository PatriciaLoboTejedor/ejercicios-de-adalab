"use strict";

let partner = "Patricia";

const body = document.querySelector("body");

if (partner === "Patricia") {
  body.innerHTML = "<h1> Bienvenida " + partner + "</h1>";
} else {
  body.innerHTML =
    "<h1> Lo siento pero el usuario que has introducido no está registrado <h1>";
}

/*if (partner === "Patricia") {
  console.log("Bienvenida " + partner);
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado"
  );
}*/
