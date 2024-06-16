const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let result ='Game';

function getPlayerChoice(playerSelection) {
    do {
        playerSelection = prompt("Pick between rock, paper, and scissors: ");
        playerSelection = playerSelection.toLowerCase();
    }
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors' || playerSelection == null)  
    
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return console.log("You win");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return console.log("You lose");
    }  else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return console.log("You win");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++
        return console.log("You lose");
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return console.log("You win");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return console.log("You lose");
    } else {
        console.log("Tie");
    }
}



playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);
console.log(playerScore);
console.log(computerScore);
