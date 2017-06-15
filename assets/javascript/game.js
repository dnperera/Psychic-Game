

//global variables
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var userGuess = "";
 var computerGuess ="";
 var userGuessList = [];

//computer choises
//var alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
var alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l'];

 
 function computerChoice(){

 	return alphabet[Math.floor(Math.random() * alphabet.length)];

 }

//console.log("Computer Choice -->"+computerChoice());

//game rest
function gameReset(){

	guessesLeft = 9;
	userGuess = "";
	computerGuess ="";
	userGuessList = [];
	
	updateScoreBoard(wins,losses,guessesLeft,userGuessList);
}


//Update browser with results
function updateScoreBoard( wins,losses,guessLeft,userInputs){
	var htmlStrimg = "";
	var guessStr ="";

	//process User Guesses for display
	for(var i=0; i< userInputs.length; i++ ) {
		guessStr = guessStr + userInputs[i].toUpperCase() +", ";
	}

	//crerate display html string
	 htmlStrimg = "<p> Wins :"+wins+"</p><p> Losses :"+losses+"</p>"+
					"<p> Guesses Left :"+guessLeft+"</p><p>Your Guesses So Far :"+guessStr+"</p>";

	document.getElementById("results").innerHTML = htmlStrimg;		
}

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
	
	// Determine which key was pressed
    userGuess = event.key;

    //initiate computer choice
    computerGuess = computerChoice();

    console.log("User Choice -->"+userGuess);
    console.log("Computer Choice -->"+computerGuess);
    
    //if both matche
    if(userGuess === computerGuess){
    	wins ++;
    	gameReset();
    }
    else {

    	if(guessesLeft > 0){
    		guessesLeft--;
    		userGuessList.push(userGuess);
    		console.log(userGuessList);

    		
    		if(guessesLeft === 0){
    			losses++;
    			gameReset();
    		}
    		else {
    			updateScoreBoard(wins,losses,guessesLeft,userGuessList);

    		}

    	}
    	
    }

};