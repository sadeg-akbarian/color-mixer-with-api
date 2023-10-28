const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const randomColorButton = document.querySelector("#randomColorButton");
let chosenRedColor = "255";
let chosenGreenColor = "105";
let chosenBlueColor = "180";

function mainBackground() {
  const main = document.querySelector("main");
  main.style.backgroundColor =
    "rgb(" +
    chosenRedColor +
    ", " +
    chosenGreenColor +
    ", " +
    chosenBlueColor +
    ")";
}

function headerBackground() {
  const header = document.querySelector("header");
  header.style.backgroundColor =
    "rgba(" +
    chosenRedColor +
    ", " +
    chosenGreenColor +
    ", " +
    chosenBlueColor +
    ", 0.25)";
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function valueToHex(c) {
  const hex = c.toString(16);
  if (hex.length === 1) {
    return "0" + hex;
  } else {
    return hex;
  }
}

function rgbToHex(r, g, b) {
  return valueToHex(r) + valueToHex(g) + valueToHex(b);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function changeTheColor() {
  mainBackground();
  headerBackground();
  red.value = parseInt(chosenRedColor);
  green.value = parseInt(chosenGreenColor);
  blue.value = parseInt(chosenBlueColor);
  const currentColor = document.querySelector("#currentColor");
  currentColor.innerText =
    "#" +
    rgbToHex(
      parseInt(chosenRedColor),
      parseInt(chosenGreenColor),
      parseInt(chosenBlueColor)
    );
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

red.addEventListener("change", function (event) {
  chosenRedColor = event.target.value;
  changeTheColor();
});

green.addEventListener("change", function (event) {
  chosenGreenColor = event.target.value;
  changeTheColor();
});

blue.addEventListener("change", function (event) {
  chosenBlueColor = event.target.value;
  changeTheColor();
});

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

randomColorButton.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
    })
    .then((data) => {
      chosenRedColor = data.rgb.r;
      chosenGreenColor = data.rgb.g;
      chosenBlueColor = data.rgb.b;
      changeTheColor();
    });
});
