let button = document.getElementById("btn");
let colorHexName = document.getElementById("Hex-value");
let hexValue = document.getElementById("hex-val");
let colorHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let body = document.body.style;

function change() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorHex[Math.floor(Math.random() * colorHex.length)];
  }
  body.backgroundColor = color;
  hexValue.textContent = color;
  console.log(color);
  // console.log(Math.random());
  // console.log(Math.floor(1.7));
}
button.addEventListener("click", change);
