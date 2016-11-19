<script type="text/javascript">
//define possible choices 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphLength = alphabet.length
//computer picks random letter 
var compChoice = alphabet[Math.floor(Math.random() * alphLength)];  
//displays win/loss on html 
var wins = "";
var losses = "";
var alreadyGuessed = "";
// document.querySelector("#wins").innerHTML = ;
// document.querySelector("#losses").innerHTML = wins;
//user choices unknown, has to push to an empty array
var userArray = [];
//limit games to play 
var livesLeft = i;

//when user clicks a letter, it collects in console. 
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	//displays user's guesses

	userArray.push(userGuess);
	document.querySelector(".lettersGuessed").innerHTML = userArray;
	//displays lives left 
	document.querySelector(".numLeft").innerHTML = livesLeft;
	
	
//how user wins, loses, and game ends 
//user has ten tries to guess computer's choice correctly
//if user guesses correctly, wins go up, lives left resets to 10
//incorrect, losses go up, lives go down
//computer has to pick a new letter after 
//decides what happens when user wins (user guess is same as comp choice)
	if (userGuess === compChoice){
		// adds 1
		wins++;
		// display wins amount
		document.querySelector(".wins").innerHTML = wins;
		//subtracts 1 life
		livesLeft--;
		// computer picks a new letter
		compChoice = alphabet[Math.floor(Math.random() * alphLength)];
		
		//if user guesses wrong letter	
	} else if (userGuess != compChoice){
		//minus 1 life
		livesLeft--;
		//displays lives left
		document.querySelector(".numLeft").innerHTML = livesLeft;

		document.querySelector(".losses").innerHTML = losses;
		//add user guess to array 
	}	
		
		//resets game - if lives left hits 0 
		
		// if (livesLeft === 0){
		// 	//losses add 1
		// 	losses++; 
		// 	//lives reset again
		// 	livesLeft == 10; 
		// 	//computer picks new letter
		// 	compChoice = alphabet[Math.floor(Math.random() * alphLength)];
		// } else if (livesLeft = 10){

		// }

		// if (userArray++){
		//  	 livesLeft--;
		// }else if{
		// 	(userArray > 9; livesLeft === 0;)
		// }
	 
		console.log(compChoice);	
		console.log(userGuess);
		// console.log(userArray);
		console.log(livesLeft);
	
}
alert("Hey! I'm the Akinator's long lost twice removed distant adopted nephew. Let's play!");
</script>