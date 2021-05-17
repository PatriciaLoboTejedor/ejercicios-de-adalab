// Colapsable
const arrows = document.querySelectorAll(".js-arrow");

// Función que cambia las secciones cuando hacemos click
function handleCollapsibles(event) {
  const selectedSection = event.target(".js-collapsable-header");
  selectedSection.classList.toggle("arrow-rotate");
  selectedSection.classList.toggle("collapsable-hidden");
}

// Bucle for...of para que recorra los elementos, en este caso las flechas
for (const arrow of arrows) {
  arrow.addEventListener("click", handleCollapsibles);
}

// Desplegable link card in share section
const creationBtn = document.querySelector(".sharecard");

function handleButtonLink(event) {
  const selectedSection = event.target.closest(".collapsible");
  selectedSection.classList.toggle("showLink");
}
creationBtn.addEventListener("click", handleButtonLink);
