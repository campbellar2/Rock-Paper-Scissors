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
    //player score
    let p = 0
    //computer score
    let c = 0
    for (let i = 0; i < 5; i++) {
        // playerSelection initialization
        let playerSelection = window.prompt("Rock, Paper, or Scissors").toLowerCase();
        // computerSelection initialization
        let computerSelection = computerPlay();
        // actual game start
        if (playRound(playerSelection, computerSelection) === "Tie") {
            // on tie, decrements counter
            console.log("Your score: " + p.toString() + "\nThe Computer: " + c.toString())
            i--
        } else if (playRound(playerSelection, computerSelection) === "Lose") {
            // on lose, increments computer score
            c++
            console.log("Your score: " + p.toString() + "\nThe Computer: " + c.toString())
        } else if (playRound(playerSelection, computerSelection) === "Win") {
            //on win, increments player score
            p++
            console.log("Your score: " + p.toString() + "\nThe Computer: " + c.toString())
        } else {
            //error or typo in player selection catch
            i--
            console.log("Error in your selection, please try again")
        }
    }
    //results
    if (p > c) {
        console.log("Congratulations! You win!")
    } else {
        console.log("Apologies, the computer won :(")
    }
}