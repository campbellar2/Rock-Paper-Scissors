// A function to create the computer 'opponent' user will be playing against 
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}
// A function to play a round of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") { return "Tie" }
        else if (computerSelection === "Paper") { return "Lose" }
        else { return "Win" }
    } else if (playerSelection === "paper") {
        if (computerSelection === "Rock") { return "Win" }
        else if (computerSelection === "Paper") { return "Tie" }
        else { return "Lose" }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "Rock") { return "Lose" }
        else if (computerSelection === "Paper") { return "Win" }
        else { return "Tie" }
    } else { return "Error" }
}

// function for the full game
function game() {
    let p = 0
    let c = 0
    for (let i = 0; i < 5; i++) {
        // playerSelection initialization
        let playerSelection = window.prompt("Rock, Paper, or Scissors").toLowerCase();
        // computerSelection initialization
        let computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection) === "Tie") {
            console.log("Your score: " + p.toString() + "\nThe Computer: " + c.toString())
            i--
        } else if (playRound(playerSelection, computerSelection) === "Lose") {
            c++
            console.log("Your score: " + p.toString() + "\nThe Computer: " + c.toString())
        } else if (playRound(playerSelection, computerSelection) === "Win") {
            p++
            console.log("Your score: " + p.toString() + "\nThe Computer: " + c.toString())
        } else {
            i--
            console.log("Error in your selection, please try again")
        }
    }
    if (p > c) {
        console.log("Congratulations! You win!")
    } else {
        console.log("Apologies, the computer won :(")
    }
}