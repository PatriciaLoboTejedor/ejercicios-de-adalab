"use strict";

const ulPrincess = document.querySelector(".js-princess");

function getPrincess() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (const itemPrincess of data) {
        ulPrincess.innerHTML += `<ul><li>${itemPrincess.name}</li>
        <li>${itemPrincess.comment}</li>
        <li><img src="${itemPrincess.picture}" alt="${itemPrincess.name}"></li>`;
      }
    });
}
getPrincess();
