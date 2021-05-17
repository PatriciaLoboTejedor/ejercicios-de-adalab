// Devuelve un icono, del servidor al pulsa el botón
function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);

// Devuelve un string de 20 caracteres, del servidor al pulsa el botón
function getString() {
  fetch("https://api.rand.fun/text/password?length=20")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result2").innerHTML = data.result;
    });
}
document.querySelector(".js-string").addEventListener("click", getString);

// Devuelve un número aleatorio, del servidor al pulsa el botón
function getNumber() {
  fetch("https://api.rand.fun/number/integer?min=0&max=95")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result3").innerHTML = data.result;
    });
}
document.querySelector(".js-number").addEventListener("click", getNumber);
