"use strict";

const teachers = document.querySelector(".teachers");

function teachersClick(event) {
  event.target.classList.toggle("teacher--selected");
}

teachers.addEventListener("click", teachersClick);
