//Global variables

var answers = ["knope", "perkins", "swanson", "pawnee", "eagleton", "sweetums", "raccoon", "galentines", "gryzzlbox", "waffles"];
var word = answers[Math.floor(Math.random() * answers.length)];
var blanks = word.split("").map(function(){return "_";});
var guessCount = 10;
var guessesMade = [];
var wins = 0;

document.getElementById("win-display").innerHTML = wins;
document.getElementById("word-display").innerHTML = blanks;
document.getElementById("remaining-guesses").innerHTML = guessCount;


document.onkeyup = function(event){

  var guess = (event.key).toLowerCase();
 	//console.log(guess);
 	var index = word.indexOf(guess);

	if(index === -1){
		guessCount--;
		guessesMade.push(guess);
		document.getElementById("remaining-guesses").innerHTML = guessCount;
		document.getElementById("letters-guessed").innerHTML = guessesMade;
	};
 	
  while(index > -1){
  	blanks[index] = guess;
  	var index = word.indexOf(guess, index + 1);
  	document.getElementById("word-display").innerHTML = blanks;
	};

//when you lose
	if(guessCount === 0){
		location.reload();
	};

//when you win
	if(blanks.indexOf("_") === -1){
		wins++;
		document.getElementById("win-display").innerHTML = wins;
		guessCount=10;
		document.getElementById("remaining-guesses").innerHTML = guessCount;
	};



	



};

//to win
//if (blanks.indexOf("_") === -1){};




