"use strict";

const yearNow = 2021;
const module = yearNow % 4;
const remainingYear = 4 - module;
const nextLeapYear = yearNow + remainingYear;

console.log(nextLeapYear);
