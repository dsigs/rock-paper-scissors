let userChoice; 
let userScore = 0;
let computerScore = 0; 

function playRound(userChoice, computerChoice) {
    
}

do {
    userChoice = prompt("Pick between rock, paper, and scissors: ");
}
while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') 

console.log("You picked:", userChoice);

function getComputerChoice() {
     return Math.floor(Math.random() * 3)
}

let computerChoice = getComputerChoice();

if (computerChoice == 0) {
    console.log("Computer picked: rock");
} else if (computerChoice == 1) {
    console.log("Computer picked: paper");
} else if (computerChoice == 2) {
    console.log("Computer picked: scissors");
}

if (userChoice == 'rock' && computerChoice == 2) {
    console.log("You win!");
    userScore++;
} else if (userChoice == 'rock' && computerChoice == 1) {
    console.log("You lose");
    computerScore++
} else {
    console.log("Tie");
}


