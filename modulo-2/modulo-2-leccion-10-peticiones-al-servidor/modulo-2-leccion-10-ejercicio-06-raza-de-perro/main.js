"use strict";

// Array vacío sobre el que luego guardaré mi listado de razas
const listBreeds = [];

// Peticiones al servidor encadenadas
function getBreedsImage() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      // Listado de razas recibida del servidor la incluimos en el array exterior
      for (const breeds in breedsData.message) {
        listBreeds.push(breeds);
      }
      return fetch("https://api.rand.fun/number/integer?min=0&max=95")
        .then((randomNumber) => randomNumber.json())
        .then((breedNumber) => {
          // Numero aleatorio recibido del servidor lo guardo en una variable
          const randomNumber = breedNumber.result;
          // Elegir una raza de manera aleatoria
          // obtenida del listado de razas + nº aleatorio en su índice
          const randomBreed = listBreeds[randomNumber];
          // Combinación de ambas solicitudes
          return fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`)
            .then((imageResponse) => imageResponse.json())
            .then((imageData) => {
              // Escribimos nombre de raza en el html
              const msj = document.querySelector(".js-msj");
              msj.innerHTML = randomBreed;
              // Pintamos imagen en el html
              const img = document.querySelector("img");
              img.src = imageData.message;
              img.alt = "Un perro de raza aleatoria";
            });
        });
    });
}

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreedsImage);
