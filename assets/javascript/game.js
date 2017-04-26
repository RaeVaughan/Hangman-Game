//Global variables

var answers = ["knope", "perkins", "swanson", "pawnee", "eagleton", "sweetums", "raccoon", "galentines", "gryzzlbox", "waffles"];
var word = answers[Math.floor(Math.random() * answers.length)];
var blanks = word.split("").map(function(){
	return "_";
});
var guess = "";
var guessCount = 12;
var index = word.indexOf(guess);

while(index > -1){
	blanks[index] = guess;
	var index = word.indexOf(guess, index + 1);
}

//document.onkeyup = function(event){
//  var key = String.fromCharCode(event.keyCode).toLowerCase();
//	if (){
//		console.log("true");
//	}
//};





