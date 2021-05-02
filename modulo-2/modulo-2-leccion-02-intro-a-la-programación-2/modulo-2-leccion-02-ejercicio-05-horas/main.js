const day = 24;
const year = 365;
const leap = 366;
const age = 60;
const percent = age / 4;

const hourLife = (year * (3 * percent) + leap * (1 * percent)) * day;

console.log(hourLife);
