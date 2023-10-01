choices = ["Rock", "Paper", "Scissors"];

// const startBtn = document.querySelector("button");

// startBtn.addEventListener("click", function () {
//     let playerChoice = prompt("Enter a choice: Rock, Paper, Scissors");
//     let computerChoice = getComputerChoice();
//     console.log(playRound(playerChoice, computerChoice));
// });

const getComputerChoice = function () {
    const randChoice = Math.random() * choices.length;
    return choices[Math.floor(randChoice)].toUpperCase();
};

// this function will check player and computer choice to determine winner.
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return "We call a draw!";
    }
    if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER" ||
        playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK" ||
        playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
        return `Player: ${playerSelection.toLowerCase()}, Computer: ${computerSelection.toLowerCase()} so player won.`;
    }
    if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS" ||
        playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER" ||
        playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        return `Computer: ${computerSelection.toLowerCase()}, Player: ${playerSelection.toLowerCase()} so computer won.`;
    }
}
   
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


const game = function () {
    let playerChoice = prompt("Enter a choice: Rock, Paper, Scissors");
    let computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
}

game();