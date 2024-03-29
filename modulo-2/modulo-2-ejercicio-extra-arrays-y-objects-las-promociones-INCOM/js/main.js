"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// Elementos sobre el que pintaremos en el HTML
const divHtml = document.querySelector(".js-result");

// Arrays Promos
function writePromos() {
  let html = "<ul>";

  for (let i = 0; i < promos.length; i++) {
    // 1. Pintar los nombres de las promos
    const promoNames = promos[i].name;
    // 2. Pintar las letras de las promos
    const promoLetter = promos[i].promo;
    // 3. Pintar el número de alumnas
    const promoStudents = promos[i].students.length;

    console.log(promoNames);
    console.log(promoLetter);
    console.log(promoStudents);

    /*divHtml.innerHTML += `<li><p>Nombre: ${promoNames}</p><p>Promo: ${promoLetter}</p><p>Número de alumnas: ${promoStudents}</p>`;*/

    html += `<li><p>Nombre: ${promoNames}</p><ul>`;

    // 4. Pintar en pantalla, dentro de las promos, los nombres y la edad de las alumnas
    const students = promos[i].students;
    for (let i = 0; i < promos.length; i++) {
      const studentsNames = students[i].name;
      const studentsAge = students[i].age;
      console.log(studentsNames);
      console.log(studentsAge);

      html += `<li>${studentsNames}, ${studentsAge}</li>`;
    }

    html += "</ul></li>";
  }

  html += "</ul>";
  divHtml.innerHTML = html;
}

writePromos();

// Array Students
/*for (let j = 0; j < promoStudents; j++) {
  // 4. Pintar en pantalla, dentro de las promos, los nombres y la edad de las alumnas
  const promoNameStudents = students[j].name;
  const promoAgeStudents = students[j].age;
  listHtml.innerHTML += `<li><p>Nombre: ${promoNames}</p><p>Promo: ${promoLetter}</p><p>Número de alumnas: ${promoStudents}</p><ul><li>${promoNameStudents}, ${promoAgeStudents}</li></ul></li>`;
}*/
