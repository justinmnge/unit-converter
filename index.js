let input = document.getElementById("input-container");
let length = document.getElementById("length-result");
let volume = document.getElementById("volume-result");
let mass = document.getElementById("mass-result");
let convert = document.getElementById("convert-btn");
let lightMode = document.getElementById("light-btn");
let darkMode = document.getElementById("dark-btn");

let isDark = true;

function resizeInput() {
  this.style.width = Math.max(this.value.length + 2, 3) + "ch";
}

function lengthResult() {
  const num = Number(input.value);

  const metersToFeet = (num * 3.28084).toFixed(3);
  const feetToMeters = (num * 0.3048).toFixed(3);

  const msg = `${num} m = ${metersToFeet} ft | ${num} ft = ${feetToMeters} m`;

  length.textContent = msg;

  return msg;
}

function volumeResult() {
  const num = Number(input.value);

  const litersToGallons = (num * 0.264172).toFixed(3);
  const gallonsToLiters = (num * 3.78541).toFixed(3);

  const msg = `${num} L = ${litersToGallons} gal | ${num} gal = ${gallonsToLiters} L`;

  volume.textContent = msg;
}

function massResult() {
  const num = Number(input.value);

  const kgToPds = (num * 2.20462).toFixed(3);
  const pdToKgs = (num * 0.453592).toFixed(3);

  const msg = `${num} kg = ${kgToPds} lb(s) | ${num} lb(s) = ${pdToKgs} kg`;

  mass.textContent = msg;
}

function toggleLight() {
  if (!isDark) return;
  const container = document.querySelector(".container");
  container.classList.toggle("light-btn");
  isDark = !isDark;
}

function toggleDark() {
  if (isDark) return;
  const container = document.querySelector(".container");
  container.classList.remove("light-btn");
  isDark = true;
}

convert.addEventListener("click", lengthResult);
convert.addEventListener("click", volumeResult);
convert.addEventListener("click", massResult);

input.addEventListener("input", resizeInput);

resizeInput.call(input);
