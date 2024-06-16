let playerSelection 
let computerSelection
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(playerSelection) {
    do {
        playerSelection = prompt("Pick between rock, paper, and scissors: ");
        playerSelection = playerSelection.toLowerCase();
    }
    while (playerSelection !== 'rock' && playerSelection !== 'paper' &&
        playerSelection !== 'scissors' || playerSelection == null)  
    
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
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
         playerSelection == 'paper' && computerSelection == 'rock' ||
          playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return console.log("Round won");
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
         playerSelection == 'paper' && computerSelection == 'scissors' ||
          playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return console.log("Round lost");
    } else {
        return console.log("Round tie");
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();        
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log('You picked:', playerSelection);
        console.log('You picked:', computerSelection);
        console.log('\n')
    }  

    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore) {
        console.log('You win!') ;
    } else if (playerScore < computerScore) {
        console.log('You lose.');
    } else {
        console.log('Game tie!');
    }
}

playGame();

