//Global variables

var answers = ["knope", "perkins", "swanson", "pawnee", "eagleton", "sweetums", "raccoon", "galentines", "gryzzlbox", "waffles"];
var word = answers[Math.floor(Math.random() * answers.length)];
var blanks = word.split("").map(function(){
	return "_";
});
var guess = "";
var guessCount = 12;
var index = word.indexOf(guess);






