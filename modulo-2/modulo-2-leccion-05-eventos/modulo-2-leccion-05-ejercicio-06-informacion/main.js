"use strict";

const textInput = document.querySelector("input").value;
let textValue = document.querySelector(".text");

function inputValue(event) {
  console.log(event.currentTarget);
  inputText.innerHTML += event.currentTarget;
}

textInput.addEventListener("change", inputValue);
