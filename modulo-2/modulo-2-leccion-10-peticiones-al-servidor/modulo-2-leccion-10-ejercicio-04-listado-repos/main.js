"use strict";
const listRepo = document.querySelector(".js-list");

function getDataOrgGitHub() {
  const input = document.querySelector("input");
  const inputValue = input.value;
  fetch(`https://api.github.com/orgs/${inputValue}`)
    .then((orgResponse) => orgResponse.json())
    .then((orgData) => {
      // Obtenemos url especifica de los repos de Adalab
      const repoUrl = orgData.repos_url;
      console.log(repoUrl);
      fetch(repoUrl)
        // Obtenemos un array de objetos que incluyen cada uno de los repositorios
        .then((listResponse) => listResponse.json())
        .then((listData) => {
          console.log(listData); // Array de objetos
          // Recorremos el array de objetos con un bucle para listar los objetos
          for (let i = 0; i < listData.length; i++) {
            const listDataRepo = listData[i];
            console.log(listDataRepo);
            // a través de .name accedemos a su valor nombre
            const listDataRepoName = listDataRepo.name;
            console.log(listDataRepo.name);
            // Pintamos el listado de nombres de repos en el html
            listRepo.innerHTML += `<li>${listDataRepoName}</li>`;
          }
        });
    });
}

const btn = document.querySelector(".js-button");
btn.addEventListener("click", getDataOrgGitHub);
