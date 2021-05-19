"use strict";

const persons = [
  {
    nombre: "Selecciona",
  },
  {
    id: "123a",
    nombre: "Patricia",
    apellido: "Lobo",
    teléfono: 6363000000,
  },
  {
    id: "123b",
    nombre: "Macarena",
    apellido: "Gonzalez",
    teléfono: 636311111,
  },
  {
    id: "123c",
    nombre: "Maria",
    apellido: "Nuñez",
    teléfono: 636322222,
  },
];

const selectElement = document.querySelector(".js-select");
const inputName = document.querySelector(".js-name");
const inputLastName = document.querySelector(".js-lastName");
const inputPhone = document.querySelector(".js-phone");

function paintOption() {
  for (const person of persons) {
    const optionEle = document.createElement("option");
    selectElement.appendChild(optionEle);
    const textElem = document.createTextNode(person.nombre);
    optionEle.appendChild(textElem);
    optionEle.setAttribute("value", person.nombre);
    optionEle.dataset.idPerson = person.id;
  }
}
paintOption();

function handlerSelect(ev) {
  const selectValue = ev.target.value;
  for (const person of persons) {
    if (selectValue == person.nombre) {
      inputName.value = selectValue;
      inputLastName.value = person.apellido;
      inputPhone.value = person.teléfono;
    }
  }
}
selectElement.addEventListener("change", handlerSelect);
