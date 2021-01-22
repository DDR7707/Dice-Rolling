var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imagesource1 = "images/dice" + randomNumber1 + ".png"

var imagesource2 = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img1").setAttribute("src",imagesource1)

document.querySelector(".img2").setAttribute("src",imagesource2)

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins"
}
else {
  document.querySelector("h1").innerHTML = "Draw"
}
