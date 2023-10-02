var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomImage1 = "/img/dice" + randomNumber1 + ".png";
var randomImage2 = "/img/dice" + randomNumber2 + ".png";

document.querySelector(".image1").setAttribute("src", randomImage1);
document.querySelector(".image2").setAttribute("src", randomImage2);

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
