//Our JavaScript code starts here:

/*

Use the following numbers to represent choices, similar to the previous lab:

	0: Rock
	1: Paper
	2: Scissors

This time, you will have to edit the images in the html part manually to call 
the play function with the appropriate argument (Hint: OnClick)

Our game will progress as follows;

1- When one of the images has been clicked, the play(playerChoice)function will
be called with and argument indicating players choice.

2- A choice for the CPU will be generated using the generateRandomNumber(min, max) function,
then stored in a local variable. This function should take in 2 numbers as arguments and 
return a number between the two, including min and max numbers.

3- The calculateResult(player, cpu) function should be called with the players and the cpus choice
as arguments. This function will use conditional statements to determine who won the game, and call
the showPlayOnBoard(player, cpu, resultText) with the players choice, cpus choice and the result text.

4- The showPlayOnBoard(player, cpu, resultText) function will use 2 conditional statements to set the 
images on the board, and set the result text based on the arguments it was given.
	

*/

var CPU;
const choiceDictionary = [
    'rock',
    'paper',
    'scissors'
]

function play(playerChoice) // playerChoice is a parameter
{
    /*
    	This function will take in 1 argument: player's choice.
    	
    	You will call this function from the OnClick event of the
    	Rock, Paper and Scissors images. It should take in the players 
    	choice as argument and then play out the game using the rest of 
    	the functions defined below.
    	
    	You should generate a CPU choice inside this function, then 
    	call the appropriate functions to calculate the result of the game.
    */

    document.getElementById("result").innerText = "CPU, pick your weapon!";

    cpuChoice = generateRandomNumber(0, 2);

    calculateResult(playerChoice, cpuChoice);
}



function generateRandomNumber(min, max) {
    /*
    	This function will take in 2 arguments: minimum number and 
    	maximum number it can generate.
    	
    	In this function you will generate a random number between 
    	these minimum and maximum numbers (both inclusive) and return 
    	it. You are going to use this function to determine the cpu choice.
    */

    return Math.floor(Math.random() * (max + 1)) + min;
}


function calculateResult(player, cpu) {
    /*
    	This function will take in 2 arguments: players choice and cpus choice.
    	
    	In this function, you are going to use conditional statements to determine
    	who won the game by comparing the choices for both players, and show the play 
    	and the result on the board by calling the appropriate function
    */

    results = "";
    if (player === cpu) {
        resultText = "draw";
    } else {

        if (player === 0 && cpu === 2) { // rock beats scissors 
            resultText = "player wins"
        } else if (player === 0 && cpu === 1) { // rock beats scissors 
            resultText = "cpus wins"
        } else if (player === 1 && cpu === 0) { // paper beats rock
            resultText = "player wins"
        } else if (player === 1 && cpu === 2) { // scissors beats paper}
            resultText = "cpu wins"
        } else if (player === 2 && cpu === 1) {
            resultText = "player wins"
        }
        if (player === 2 && cpu === 0) { // rock beats scissors {
            resultText = "cpu wins"
        }
    }

    showPlayOnBoard(player, cpu, resultText)
    logActivity(player, cpu, resultText)
}

function logActivity (playerChoice, cpuChoice, resultText) {
    var activityLog = document.getElementById("activity-log"),
        userLog = document.createTextNode(`Player selected "${choiceDictionary[playerChoice]}".`),
        cpuLog = document.createTextNode(`CPU selected "${choiceDictionary[cpuChoice]}".`),
        resultLog = document.createTextNode(`Result: "${resultText}"`),
        logSeperator = document.createTextNode(`------------------------------------`),
        consolidatedLog = [
            userLog,
            cpuLog,
            resultLog,
            logSeperator
        ], 
        node;

        
    consolidatedLog.forEach(function (logItem) {
        node = document.createElement("LI");
        node.appendChild(logItem);
        activityLog.appendChild(node);
    });
}


function showPlayOnBoard(playerChoice, cpuChoice, result) {

    /*
    	This function will take in 3 arguments: players choice, cpus choice and the 
    	result to display on the board.
    	
    	When this function is called, you already have played out the game and determined
    	who won. You just need to show the result on the board now, along with the choice
    	both the player and the cpu made.
    	
    	For the player and cpu images, you will need to use a conditional statement each 
    	and set the source of the images on the board appropriately. For the result text,
    	you should use the resultText argument.
    	
    */

    if (playerChoice === 0) {
        document.getElementById("playerChoice").setAttribute("src", "rock.png"); // change based on playerChoice
    } else if (playerChoice === 1) {
        document.getElementById("playerChoice").setAttribute("src", "paper.png");
    } else if (playerChoice === 2) {
        document.getElementById("playerChoice").setAttribute("src", "scissors.png");
    }

    if (cpuChoice === 0) {
        document.getElementById("cpuChoice").setAttribute("src", "rock.png"); // change based on cpuChoice
    } else if (cpuChoice === 1) {
        document.getElementById("cpuChoice").setAttribute("src", "paper.png");
    } else if (cpuChoice === 2) {
        document.getElementById("cpuChoice").setAttribute("src", "scissors.png");
    }

    document.getElementById("result").innerText = result;

}