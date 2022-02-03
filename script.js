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

function gameEnd() {
    const winText = document.createElement('p');

    if(playerScore > 4) winText.textContent = "You win! Congratulations! Refresh the page to play again!"
    else winText.textContent = "You lose! Better luck next time! Refresh the page to play again!"

    const div = document.querySelector('.text-div');
    div.appendChild(winText);

    document.body.style.backgroundColor = 'lime';

    buttons.forEach(button => {
        button.removeEventListener('click', playRound);
    });
}

function playRound(e)
{
    let playerSelection = this.innerText;
    let computerSelection = computerPlay();

    if(playerSelection === computerSelection)
    {
        mainText.textContent = `Computer played ${computerSelection}. It's a tie! Choose again!`
    }
    else if ((playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Rock" && computerSelection === "Scissors")) {
        mainText.textContent = `Computer played ${computerSelection}. You win!`
        playerScore++;
    }
    else {
        mainText.textContent = `Computer played ${computerSelection}. You lose!`
        compScore++;
    }
    
    scoreText.textContent = `Current score: You - ${playerScore}, computer - ${compScore}`;

    if(playerScore > 4 || compScore > 4) gameEnd();
}

let playerScore = 0;
let compScore = 0;

const mainText = document.querySelector('.game-text')
const scoreText = document.querySelector('.game-score')

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', playRound);
});



