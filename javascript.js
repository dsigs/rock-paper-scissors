let playerSelection 
let computerSelection
let playerScore = 0;
let computerScore = 0;

/* function getPlayerChoice(playerSelection) {
    do {
        playerSelection = prompt("Pick between rock, paper, and scissors: ");
        playerSelection = playerSelection.toLowerCase();
    }
    while (playerSelection !== 'rock' && playerSelection !== 'paper' &&
        playerSelection !== 'scissors' || playerSelection == null)  
    
    return playerSelection      
} */

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
        return playerScore
    } 
    if (playerSelection == 'rock' && computerSelection == 'paper' ||
         playerSelection == 'paper' && computerSelection == 'scissors' ||
          playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return computerScore
    }
}

function playGame() {    
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    if (playerScore === 5) {
        return results.textContent = 'You win!'
    } 
    if (computerScore === 5) {
        return results.textContent = 'You lose!'
    }
}

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors')

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    playGame();
    displayPicks();
    displayScore();
    displayWinner();
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    playGame();
    displayPicks();
    displayScore();
    displayWinner();
});

scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    playGame();
    displayPicks();
    displayScore();
    displayWinner();
});

let display = document.querySelector('#display');
let playerScoreUI = document.createElement('p');
let computerScoreUI = document.createElement('p');
let results = document.createElement('p');
let showPicks = document.createElement('p');

function displayScore() {
    display.appendChild(playerScoreUI);
    playerScoreUI.textContent = playerScore;
    display.appendChild(computerScoreUI);
    computerScoreUI.textContent = computerScore;
}

function displayWinner() {
    display.appendChild(results);

    if (playerScore === 5) {
        return results.textContent = 'You win!';
    }
    if (computerScore === 5) {
        return results.textContent = 'Computer wins'
    }
}  

function displayPicks() {   
    display.appendChild(showPicks);
    showPicks.textContent = `You picked ${playerSelection}. 
    Opponent picked ${computerSelection}.`;
}