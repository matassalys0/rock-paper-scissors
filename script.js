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

function playRound(playerSelection, computerSelection){
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

console.log(playRound("Scissors", computerPlay()));


