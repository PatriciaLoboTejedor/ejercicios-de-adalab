"use strict";

const teacherIsra = document.querySelector(".teacher--isra");
const teacherTuerto = document.querySelector(".teacher--tuerto");
const teacherNasi = document.querySelector(".teacher--nasi");
const sectionAboutElement = document.querySelector(".teacher");

function teacherClick(event) {
  event.currentTarget.classList.toggle("teacher--selected");
  if (event.currentTarget.querySelector(".favorite").innerHTML === "Añadir") {
    const addClass = event.currentTarget
      .querySelector(".favorite")
      .innerHTML.replace("Añadir", "Quitar");
    event.currentTarget.querySelector(".favorite").innerHTML = addClass;
  } else {
    const removeClass = event.currentTarget
      .querySelector(".favorite")
      .innerHTML.replace("Quitar", "Añadir");
    event.currentTarget.querySelector(".favorite").innerHTML = removeClass;
  }
}

teacherIsra.addEventListener("click", teacherClick);
teacherTuerto.addEventListener("click", teacherClick);
teacherNasi.addEventListener("click", teacherClick);
