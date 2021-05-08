"use strict";

// Objeto con varias propiedas
const basketPears = {
  maxPears: 10,
  minPears: 3,
  actuallyPears: 8,
  inicialPears: 4,
};

// Incluir varios métodos al objeto
// Añadir al cesto una pera
basketPears.sumPear = function () {
  return (this.actuallyPears = this.actuallyPears + 1);
};
// Sacar del cesto una pera
basketPears.restPear = function () {
  return (this.actuallyPears = this.actuallyPears - 1);
};
// Restablecer el número de peras al valor inicial.
basketPears.iniPear = function () {
  return (this.actuallyPears = this.inicialPears);
};

console.log(basketPears.sumPear());

console.log(basketPears.restPear());

console.log(basketPears.iniPear());
