"use strict";

/*let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}*/

const avocadoPrice = 1.5;
const money = 33;
let avocados = money >= avocadoPrice ? money / avocadoPrice : (avocados = 0);

console.log(avocados);
