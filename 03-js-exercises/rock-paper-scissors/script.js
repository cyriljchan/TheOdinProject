function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("Please type rock, paper, or scissors");
    return (choice[0].toUpperCase() + choice.slice(1).toLowerCase());
}

function playRound(playerSelection, computerSelection) {
    let result = (playerSelection === computerSelection) ? 2 :
    ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) ? 1 : 0;

    return result;
}

function game() {
    for (let i=0; i<5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        (result === 0) ? console.log(`You Lose! ${computerSelection} beats ${playerSelection}`) :
        (result === 1) ? console.log(`You Win! ${playerSelection} beats ${computerSelection}`) :
        (result === 2) ? console.log(`You Tied! You both chose ${playerSelection}`) : 0;
    }
}