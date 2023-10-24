// // initialize fields and DOM objects.
// let choices = ["rock", "paper", "scissors"];
// const startBtn = document.querySelector("button");

// const getComputerChoice = function () {
//     const randChoice = Math.random() * choices.length;
//     return choices[Math.floor(randChoice)].toLowerCase();
// }

// const validateplayerChoice = function (playerChoice) {
//     return choices.includes(playerChoice);
// }

// // get user input and validate
// const getUserInput = function () {
//     let playerChoice = prompt("Enter a choice: Rock, Paper, Scissors");
//     while (playerChoice == null) {
//         playerChoice = prompt("Enter a choice: Rock, Paper, Scissors");
//     }
//     while (validateplayerChoice(playerChoice.toLowerCase()) != true) {
//         playerChoice = prompt("Enter a valid choice: Rock, Paper, Scissors");
//     }
//     return playerChoice.toLowerCase();
// }

// // this function will check player and computer choice to determine winner.
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
//         return "tie";
//     }
//     if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER" ||
//         playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK" ||
//         playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
//         return "player";
//     }
//     if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS" ||
//         playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER" ||
//         playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
//         return 'computer';
//     }
// }


// const game = function () {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 1; i <= 5; i++) {
//         playerChoice = getUserInput();
//         computerChoice = getComputerChoice();
//         console.log(playerChoice, computerChoice);
//         roundWinner = playRound(playerChoice, computerChoice);
//         console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}`);
//         if (roundWinner == 'tie') {
//             console.log("It's a tie!");
//         } else if (roundWinner == 'computer') {
//             computerScore++;
//             console.log("Computer won!");
//         } else {
//             playerScore++;
//             console.log("Player won!");
//         }
//     }
//     const finalScoreMessage = `Final Score - Player: ${playerScore} Computer: ${computerScore}`;
//     if (playerScore == computerScore) {
//         console.log(`${finalScoreMessage}. It's a tie!`);
//     } else if (playerScore < computerScore) {
//         console.log(`${finalScoreMessage}. Computer won!`);
//     } else {
//         console.log(`${finalScoreMessage}. Player won!`);
//     }
// }

// startBtn.addEventListener("click", game());