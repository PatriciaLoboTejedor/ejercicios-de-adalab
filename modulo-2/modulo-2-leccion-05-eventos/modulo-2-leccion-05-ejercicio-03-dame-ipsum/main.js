"use strict";

const text = document.querySelector(".js-text");

function newText() {
  text.innerHTML +=
    '<p class="js-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum porro suscipit odit necessitatibus facilis nulla in rerum, nemo cupiditate est error natus vitae quasi, reiciendis, exercitationem inventore eum qui accusamus?</p>';
}

text.addEventListener("mouseover", newText);
