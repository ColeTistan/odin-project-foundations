let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.getElementById("scoreboard");
const playerCurrentScore = document.getElementById("player-current-score");
const computerCurrentScore = document.getElementById("computer-current-score");
const gameResults = document.getElementById("game-results");
const choicesDiv = document.getElementById("game-choices");
const choicebtns = choicesDiv.querySelectorAll("button");
const gameMessage = gameResults.querySelector("p");
// initialize fields and DOM objects.

let choices = ["rock", "paper", "scissors"];

const getComputerChoice = function() {
    const randChoice = Math.random() * choices.length;
    return choices[Math.floor(randChoice)].toLowerCase();
}

const getPlayerChoice = function(playerChoice) {
    return playerChoice;
}

choicebtns.forEach(function(button) {
    button.addEventListener('click', function() {
        game(button.value);
    })
});

const disableButtons = function() {
    choicebtns.forEach(function(button) {
        button.disabled = true;
    })
}

const createWinnerMessage = function(winner) {
    winnerDiv = document.createElement("div");
    winnerMessage = document.createElement("p");
    winnerMessage.className = "winner";
    scoreBoard.appendChild(winnerDiv);
    winnerDiv.appendChild(winnerMessage);
    winnerMessage.innerHTML = `${winner} won!`;
}

const declareFinalWinner = function(winner) {
        createWinnerMessage(winner);
        disableButtons();
}

// this function will check player and computer choice to determine winner.
function playRound(playerChoice, computerChoice) {
    if ((playerChoice == "rock" && computerChoice == "scissors") || 
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        playerScore++;
        gameMessage.innerText = `Player Won! ${playerChoice} beats ${computerChoice}`;
        playerCurrentScore.innerText = playerScore;
        computerCurrentScore.innerText = computerScore;
        gameResults.appendChild(gameMessage);
        if (playerScore == 5) {
            declareFinalWinner("Player");
            disableButtons();
        }
    } else if ((playerChoice == "rock" && computerChoice == "paper") ||
               (playerChoice == "paper" && computerChoice == "scissors") ||
               (playerChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        computerCurrentScore.innerText = computerScore;
        playerCurrentScore.innerText = playerScore;
        gameMessage.innerHTML = `Computer won! ${computerChoice} beats ${playerChoice}`;
        gameResults.appendChild(gameMessage);
        if (computerScore == 5) {
            declareFinalWinner("Computer");
            disableButtons();
        }
    } else {
        gameMessage.innerHTML = `It's a tie! ${playerChoice} ties with ${computerChoice}`;
        gameResults.appendChild(gameMessage); 
    }
}

const game = function(playerChoice) {
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
} 