"use strict";

const team = document.querySelector(".team-link");
const adalabers = document.querySelector(".adalabers-link");
const contact = document.querySelector(".contact-link");

function stopLink(event) {
  event.preventDefault();
}

team.addEventListener("click", stopLink);
adalabers.addEventListener("click", stopLink);
contact.addEventListener("click", stopLink);
