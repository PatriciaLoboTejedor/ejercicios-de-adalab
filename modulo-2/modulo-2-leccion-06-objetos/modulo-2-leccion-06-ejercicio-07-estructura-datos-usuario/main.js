"use strict";

// Objeto 1
const user = {};
const job = "developer";

// Usando la notación con punto o la notación con corchetes
// Añadiremos propiedades
user.firstName = "Patricia";
user.lastName = "Lobo";
user.age = 29;
user.job = job;

// Comprobaremos que hasta ahora los datos son correctos
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.job);

// Cambiaremos diferentes propiedades
user.firstName = "Jorge";
user.age = user.age + 1;

// Comprobaremos los cambios
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.job);
