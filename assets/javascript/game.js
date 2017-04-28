//Global variables

var answers = ["knope", "perkins", "swanson", "pawnee", "eagleton", "sweetums", "raccoon", "galentines", "gryzzlbox", "waffles"];
var word = answers[Math.floor(Math.random() * answers.length)];
var blanks = word.split("").map(function(){return "_";});
var guessCount = 10;
var guessesMade = [];
var wins = [];

document.getElementById("word-display").innerHTML = blanks;
//var blanksDisplay = document.createElement("div");
//blanksDisplay.innerHTML = "blanks";
//wordDisplay.appendChild(blanksDisplay);


document.onkeyup = function(event){

  var guess = (event.key).toLowerCase();
 	//console.log(guess);
 	var index = word.indexOf(guess);
 	
  while(index > -1){
  	blanks[index] = guess;
  	var index = word.indexOf(guess, index + 1);
	};

	if (index === -1){
		guessCount--;
		guessesMade.push(guess);
	};



};

//to win
//if (blanks.indexOf("_") === -1){};

//to lose
//if (guessCount === 0){};




