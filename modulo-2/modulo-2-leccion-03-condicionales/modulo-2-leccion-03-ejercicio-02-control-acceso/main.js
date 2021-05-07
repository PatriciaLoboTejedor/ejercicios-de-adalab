"use strict";

let partner = "Elia Alonso";

const body = document.querySelector("body");

if (
  partner === "Patricia Lobo" ||
  partner === "Rosa Berned" ||
  partner === "Elia Alonso"
) {
  body.innerHTML = "<h1> Bienvenida " + partner + "</h1>";
} else {
  body.innerHTML =
    "<h1> Lo siento pero el usuario que has introducido no está registrado <h1>";
}

/*if (partner === "Patricia Lobo" || partner === "Rosa Berned") {
  console.log("Bienvenida " + partner);
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado"
  );
}*/
