"use strict";

const title = document.querySelector(".js-title");

const name1 = document.querySelector(".js-name1");

const name2 = document.querySelector(".js-name2");

title.innerHTML += name2.innerHTML;

console.log(title);
