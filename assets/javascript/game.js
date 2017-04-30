//Global variables

//all answers available
var answers = ["knope", "perkins", "swanson", "mouserat", "eagleton", "pawnee", "sweetums", "april", "gryzzlbox", "waffles"];
//picks a random word out of answers
var word = answers[Math.floor(Math.random() * answers.length)];
//splits the word into blanks
var blanks = word.split("").map(function(){return "_";});
var guessCount = 10;
//array that appears under letters already guessed when an incorrect letter is chosen
var guessesMade = [];
var wins = 0;
//expression that keeps anything but letters (and enter key) from appear is guessesMade array
var regex = /^[a-zA-Z]*$/;

//starting display
document.getElementById("win-display").innerHTML = wins;
document.getElementById("word-display").innerHTML = blanks;
document.getElementById("remaining-guesses").innerHTML = guessCount;
document.getElementById("image").src = "assets/images/pawnee-welcome.jpg";


//everything else happens on the condition that a key is pressed
document.onkeypress = function(event){
	//guess is the key the user presses changed to lower case
  var guess = (event.key).toLowerCase();
 	//console.log(guess);
 	//index of the guess within the word
 	var index = word.indexOf(guess);

 	//function for the reg ex var defined globally
 	if (guess.match(regex)){

 		//if the guess is not in the word, index is -1
		if(index === -1){
			//guess count goes down by 1
			guessCount--;
			//each incorrect guess is pushed to guessesMade array
			guessesMade.push(guess);
			//pushes to html to visualize in browser
			document.getElementById("remaining-guesses").innerHTML = guessCount;
			document.getElementById("letters-guessed").innerHTML = guessesMade;
		};

		//while guess is in the word
	  while(index > -1){
	  	//the index of blanks becomes the guess
	  	blanks[index] = guess;
	  	//declares a new index variable to start after the first blank is filled with guess so that multiples of the same letter in a word all get changed from blanks to the guess
	  	var index = word.indexOf(guess, index + 1);
	  	document.getElementById("word-display").innerHTML = blanks;
		};

	//when guess count gets to zero, the user loses and the whole game resets
		if(guessCount === 0){
			location.reload();
		};

	//if there are no more blanks, then the user has won
		if(blanks.indexOf("_") === -1){

			//pictures displayed on win based on word
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

			//wins go up
			wins++;
			document.getElementById("win-display").innerHTML = wins;

			//guess count resets
			guessCount=10;
			document.getElementById("remaining-guesses").innerHTML = guessCount;

			//new word is chosen and split into blanks
			word = answers[Math.floor(Math.random() * answers.length)];
			blanks = word.split("").map(function(){return "_";});
			document.getElementById("word-display").innerHTML = blanks;

			//guessesMade array is reset to empty
		 	guessesMade = [];
		 	document.getElementById("letters-guessed").innerHTML = guessesMade;
		};

	}

};

