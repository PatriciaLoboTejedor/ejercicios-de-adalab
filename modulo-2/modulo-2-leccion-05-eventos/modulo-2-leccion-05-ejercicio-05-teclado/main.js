"use strict";

const container = document.querySelector("body");

function onkeydown(push) {
  let key = push.key;
  if (key === "r") {
    container.classList.add("red");
    container.classList.remove("purple");
  } else if (key === "m") {
    container.classList.add("purple");
    container.classList.remove("red");
  }
}

document.addEventListener("keydown", onkeydown);
