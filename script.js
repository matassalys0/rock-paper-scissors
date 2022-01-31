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

function checkIfValidSelection(playerSelection) 
{
    if (playerSelection === "Scissors" || playerSelection === "Rock" || playerSelection === "Paper")
        return true;
    else
        return false;
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if(!checkIfValidSelection(playerSelection))
        return "lose";

    console.log(`Computer plays ${computerSelection}`);
    if(playerSelection === computerSelection)
        return "tie"
    else if ((playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Rock" && computerSelection === "Scissors")) {
        return "win"
    }
    else {
        return "lose"
    }
    
}

function game() 
{
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i <= 4; i++) 
    {
       console.log(`Round ${i + 1}, let's go!`) 
       console.log(`Current score: You - ${playerScore}, computer - ${compScore}`);
       let playerSelection = prompt('Duel! Rock, paper or scissors!? If you put something else you lose automatically!');
       let result = playRound(playerSelection, computerPlay());

       switch(result) {
           case "win": 
                console.log("You win!");
                playerScore++;
                break;

           case "lose":
                console.log("You lose!");
                compScore++;
                break;

           default:
                console.log("It's a tie!");
       } 
    }

    if(playerScore > compScore) 
    {
        console.log("End of the game! You win!");
        console.log(`Final score: You - ${playerScore}, computer - ${compScore}`);
    }
    else if (compScore > playerScore)
    {
        console.log("End of the game! You lose!");
        console.log(`Final score: You - ${playerScore}, computer - ${compScore}`);
    } 
    else 
    {
        console.log("End of the game! It's a tie!");
        console.log(`Final score: You - ${playerScore}, computer - ${compScore}`);
    }
        
}

 game();


