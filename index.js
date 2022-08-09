var randomNumber1 = Math.random() * 6;
randomNumber1 = (Math.floor(randomNumber1) + 1);
var randomDice1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDice1); 

var randomNumber2 = Math.random() * 6;
randomNumber2 = (Math.floor(randomNumber2) + 1);
var randomDice2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2"); 
image2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins";
else if (randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = "Player 2 Wins";  
else document.querySelector("h1").innerHTML = "Draw";

