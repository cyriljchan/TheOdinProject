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
    let tie = (playerSelection === computerSelection);
    let win = ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper"));

    tie ? console.log(`You Tied! You both chose ${playerSelection}`) :
    win ? console.log(`You Win! ${playerSelection} beats ${computerSelection}`) : 
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
}