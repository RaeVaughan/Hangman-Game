//Global variables

var answers = ["knope", "perkins", "swanson", "mouserat", "eagleton", "pawnee", "sweetums", "april", "gryzzlbox", "waffles"];
var word = answers[Math.floor(Math.random() * answers.length)];
var blanks = word.split("").map(function(){return "_";});
var guessCount = 10;
var guessesMade = [];
var wins = 0;
var regex = /^[a-zA-Z]*$/;

document.getElementById("win-display").innerHTML = wins;
document.getElementById("word-display").innerHTML = blanks;
document.getElementById("remaining-guesses").innerHTML = guessCount;
document.getElementById("image").src = "assets/images/pawnee-welcome.jpg";



document.onkeypress = function(event){
  var guess = (event.key).toLowerCase();
 	//console.log(guess);
 	var index = word.indexOf(guess);

 	if (guess.match(regex)){

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

			if(word === "knope"){
				document.getElementById("defaultImg").src = "assets/images/knope.jpg"
			}

			if(word === "perkins"){
				document.getElementById("defaultImg").src = "assets/images/perkins.jpg"
			}

			if(word === "swanson"){
				document.getElementById("defaultImg").src = "assets/images/swanson.jpg"
			}

			if(word === "mouserat"){
				document.getElementById("defaultImg").src = "assets/images/mouserat.jpg"
			}

			if(word === "eagleton"){
				document.getElementById("defaultImg").src = "assets/images/eagleton.png"
			}

			if(word === "pawnee"){
				document.getElementById("defaultImg").src = "assets/images/pawnee-welcome.jpg"
			}

			if(word === "sweetums"){
				document.getElementById("defaultImg").src = "assets/images/sweetums.jpeg"
			}

			if(word === "april"){
				document.getElementById("defaultImg").src = "assets/images/april.png"
			}

			if(word === "gryzzlbox"){
				document.getElementById("defaultImg").src = "assets/images/gryzzl.jpg"
			}

			if(word === "waffles"){
				document.getElementById("defaultImg").src = "assets/images/waffles.png"
			}

			wins++;
			document.getElementById("win-display").innerHTML = wins;

			guessCount=10;
			document.getElementById("remaining-guesses").innerHTML = guessCount;

			word = answers[Math.floor(Math.random() * answers.length)];
			blanks = word.split("").map(function(){return "_";});
			document.getElementById("word-display").innerHTML = blanks;

		 guessesMade = [];
		 document.getElementById("letters-guessed").innerHTML = guessesMade;
		};

	}

};

