const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(playerSelection) {
    do {
        playerSelection = prompt("Pick between rock, paper, and scissors: ");
        playerSelection = playerSelection.toLowerCase();
    }
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors')  
    return playerSelection      
}

function getComputerChoice(computerSelection) {
    computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection == 0) {
        computerSelection = 'rock';
    } else if (computerSelection == 1) {
        computerSelection = 'paper';
    } else if (computerSelection == 2) {
        computerSelection = 'scissors';
    }
    
    return computerSelection
}

function playRound() {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("You win!");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("You lose");
    } else {
        console.log("Tie");
    }
    
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("You win!");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log("You lose");
    } else {
        console.log("Tie");
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("You win!");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log("You lose");
    } else {
        console.log("Tie");
    }


}

