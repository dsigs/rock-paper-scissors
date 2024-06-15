let playerChoice 

do {
    playerChoice = prompt("Pick between rock, paper, and scissors: ");
}
while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') 

console.log(playerChoice);

function getComputerChoice() {
     return Math.floor(Math.random() * 3)
}

let computerChoice = getComputerChoice();

if (computerChoice == 0) {
    console.log("Computer: rock");
} else if (computerChoice == 1) {
    console.log("Computer: paper");
} else if (computerChoice == 2) {
    console.log("Computer: scissors")
}

if (playerChoice == 'rock' && computerChoice == 2) {
    console.log("You win!");
} else if (playerChoice == 'rock' && computerChoice == 1) {
    console.log("You lose");
} else {
    console.log("Tie");
}
