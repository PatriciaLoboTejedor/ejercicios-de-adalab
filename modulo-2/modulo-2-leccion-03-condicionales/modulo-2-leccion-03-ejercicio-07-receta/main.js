"use strict";

const receipt = "";

switch (receipt) {
  case "Pollo":
    console.log(
      "Tu ingrediente es el pollo. Puedes freirte un filete con patatas"
    );
    break;
  case "Merluza":
    console.log("Tu ingrediente es la merluza. Puedes hacerla en salsa verde");
    break;
  case "Espinacas":
    console.log("Tu ingrediente son las espinacas. Puedes hacerlas rehogadas");
    break;
  default:
    console.log("Nada en la nevera");
}
