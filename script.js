// A function to create the computer 'opponent' user will be playing against 
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}
// A function to play a round of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") { return "You tie! Rock ties with Rock" }
        else if (computerSelection === "Paper") { return "You lose! Paper beats Rock" }
        else { return "You win! Rock beats Scissors" }
    } else if (playerSelection === "paper") {
        if (computerSelection === "Rock") { return "You win! Paper beats Rock" }
        else if (computerSelection === "Paper") { return "You tie! Paper ties with Paper" }
        else { return "You lose! Scissors beats Paper" }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") { return "You lose! Rock beats Scissors" }
        else if (computerSelection === "Paper") { return "You win! Scissors beats Paper" }
        else { return "You tie! Scissors ties with Scissors" }
    } else console.log("Error in your selection, please try again.")
}
// playerSelection initialization
const playerSelection = "rock";
// computerSelection initialization
const computerSelection = computerPlay();