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
    updateUI();

    if (playerScore === 5 || computerScore === 5) {
        allBtns.forEach((button) => button.disabled = true);
    }

}

function handleButtonClick(choice) {
    playerSelection = choice;
    playGame();
}

let allBtns = document.querySelectorAll('.btn');
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors')

rockBtn.addEventListener('click', () => handleButtonClick('rock'));

paperBtn.addEventListener('click', () => handleButtonClick('paper'));

scissorsBtn.addEventListener('click', () => handleButtonClick('scissors'));

const display = document.querySelector('#display');
const playerScoreUI = document.createElement('p');
const computerScoreUI = document.createElement('p');
const results = document.createElement('p');
const showPicks = document.createElement('p');

function displayScore() {
    playerScoreUI.textContent = `Player Score: ${playerScore}`;
    computerScoreUI.textContent = `Computer Score: ${computerScore}`;
    display.appendChild(playerScoreUI);
    display.appendChild(computerScoreUI);
}

function displayWinner() {

    if (playerScore === 5) {
        return results.textContent = 'You win!';
    } else if (computerScore === 5) {
        return results.textContent = 'Computer wins'
    }
    display.appendChild(results);

}  

function displayPicks() {   
    showPicks.textContent = `You picked ${playerSelection}. Opponent picked ${computerSelection}.`;
    display.appendChild(showPicks);
}

function updateUI() {
    displayPicks();
    displayScore();
    displayWinner();
}

//Is there anyway I can refactor better?