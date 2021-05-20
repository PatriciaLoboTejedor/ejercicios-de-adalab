"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

// Usuario con un pin concreto
const pin5232 = users.find((user) => user.pin === 5232);
// Nombre de ese usuario con un pin concreto
console.log(pin5232.name);

// Borrar el usuario con pin concreto de nuestro array de usuarios
// 1º Buscamos su ubicación de indíce dentro de nuestro array
const indexPin5232 = users.findIndex((user) => user.pin === 5232);
console.log(indexPin5232);

// 2º Extraemos ese indice de nuestro array, nuestro array principal queda modificado
const newUsers = users.splice(3, 1);
console.log(users);

// la nueva constante seria solo los elementos borrados de nuestro array
console.log(newUsers);
