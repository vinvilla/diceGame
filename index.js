var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img1").src = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img2").src = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins! ";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
