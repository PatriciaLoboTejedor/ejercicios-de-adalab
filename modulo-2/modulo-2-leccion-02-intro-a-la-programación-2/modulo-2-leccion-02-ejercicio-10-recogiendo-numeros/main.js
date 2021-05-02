const day = 24;
const year = 365;
const leap = 366;
const age = document.querySelector(".js-age");
const percent = parseInt(age.innerHTML) / 4;

console.log(age.innerHTML);

const hourLife = (year * (3 * percent) + leap * (1 * percent)) * day;

console.log(hourLife);
