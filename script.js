var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".random");

function generateRandomHexColor() {
    var color = "#";
    var letters = "0123456789ABCDEF";

    for (var i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setGradient() {
  body.style.background = "linear-gradient(to right, "
   + color1.value + ", "
   + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  color1.value = generateRandomHexColor();
  color2.value = generateRandomHexColor();

  body.style.background = "linear-gradient(to right, "
  + color1.value + ", "
  + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);

setGradient();
