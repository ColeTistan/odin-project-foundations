choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = function () {
    const randChoice = Math.random() * choices.length;
    return choices[Math.floor(randChoice)]
}

// TODO - Write a function to handle logic for game
// to determine the winner through predicates