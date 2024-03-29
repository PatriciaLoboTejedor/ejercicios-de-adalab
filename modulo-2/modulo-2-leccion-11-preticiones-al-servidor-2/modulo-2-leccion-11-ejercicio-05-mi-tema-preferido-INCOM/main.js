"use strict";

const main = document.querySelector(".js-main");
const inputs = document.querySelectorAll("input");

function changeTheme(event) {
  debugger;
  if (event.currentTarget.value === "oscuro") {
    main.classList.remove("light");
    main.classList.add("dark");
  } else if (event.currentTarget.value === "claro") {
    main.classList.remove("dark");
    main.classList.add("light");
  }
  localStorage.setItem("theme", input.value);
}

/*input.addEventListener("click", changeTheme);*/

for (const inputElement of inputs) {
  debugger;
  inputElement.addEventListener("click", changeTheme);
}

const theme = localStorage.getItem("theme");
input.value = theme;
