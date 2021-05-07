"use strict";

// classList.remove or add
const container = document.querySelector(".js-container");

function scrollMove() {
  let scrollMove = window.scrollY;
  if (scrollMove >= 250) {
    container.classList.remove("color1");
    container.classList.add("color2");
  } else if (scrollMove < 250) {
    container.classList.remove("color2");
    container.classList.add("color1");
  }
}

window.addEventListener("scroll", scrollMove);
