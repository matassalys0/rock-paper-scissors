"use strict"

function computerPlay() {
    let randomNum = Math.trunc(Math.random() * 3) + 1;
    
    switch(randomNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Rock"; 
    }
}

function checkIfValidSelection(playerSelection) {
    if (playerSelection === "Scissors" || playerSelection === "Rock" || playerSelection === "Paper")
        return true;
    else
        return false;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if(!checkIfValidSelection(playerSelection))
        return "Wrong selection! You can only choose rock paper or scissors!";

    console.log(`Computer plays ${computerSelection}`);
    if(playerSelection === computerSelection)
        return "It's a tie! Play again."
    else if ((playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Rock" && computerSelection === "Scissors")) {
        return "You win! Congrats!"
    }
    else {
        return "You lose :(. Try again."
    }
    
}

let playerSelection = prompt('Duel! Rock, paper or scissors!?');

console.log(playRound(playerSelection, computerPlay()));


