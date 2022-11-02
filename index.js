var diceNumberOne = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var diceNumberTwo = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


var playerOne = Math.floor((Math.random() * 6) + 1);
var playerTwo = Math.floor((Math.random() * 6) + 1);


var x = diceNumberOne[playerOne - 1];
var y = diceNumberTwo[playerTwo - 1];

function imageChange() {
      document.getElementById("imageOne").setAttribute ("src", x);
      document.getElementById("imageTwo").setAttribute ("src", y);

}

function changeTitle() {

      if (playerOne === playerTwo) {
            document.querySelector("h1").innerHTML = "Draw!!";
            imageChange();
      }
      
      else if (playerOne > playerTwo) {
            document.querySelector("h1").innerHTML = "Player One Wins!!";
            imageChange();       
      }

      else {
            document.querySelector("h1").innerHTML = "Player Two Wins!!";
            imageChange();
      }
}

changeTitle();



