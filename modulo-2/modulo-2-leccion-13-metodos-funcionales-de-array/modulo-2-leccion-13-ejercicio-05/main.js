"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];

// Elementos pares del array principal
const pinsEven = pins.filter((pin) => pin % 2 === 0);
console.log(`Los pins pares son: ${pinsEven}`);
console.log(pinsEven);

// Elementos impares del array principal
const pinsOdd = pins.filter((pin) => pin % 2 === 1);
console.log(`Los pins impares son: ${pinsOdd}`);
console.log(pinsOdd);
