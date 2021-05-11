"use strict";

// Mediante formulario recoger 2 peliculas favoritas
// Cuando pulse botón enviar guardaremos la info en un array
const favoriteSeries = ["Outlander", "Black Mirror"];

// bucle for...of
for (const movie of favoriteSeries) {
  console.log(
    `¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`
  );
}
