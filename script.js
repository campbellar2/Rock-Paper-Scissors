//grabbing buttons from index
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.querySelector('p')
const results = document.querySelector('h4')

let playerScore = 0;
let computerScore = 0;

//script to play a round on click of buttons
rock.addEventListener('click', () => playRound("rock", computerPlay()));
paper.addEventListener('click', () => playRound("paper", computerPlay()));
scissors.addEventListener('click', () => playRound("scissors", computerPlay()));


// A function to create the computer 'opponent' user will be playing against 
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}
// A function to play a round of RPS
function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        score.textContent = "You've completed the game! Please reload page to play again."
        return
    }
    if (playerSelection === "rock") {
        if (computerSelection === "rock") { 
            results.textContent = "Tie!"
        }
        else if (computerSelection === "paper") { 
            results.textContent = "Lose!"
            computerScore++
        }
        else { 
            results.textContent = "Win!"
            playerScore++
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") { 
            results.textContent = "Win!"
            playerScore++
        }
        else if (computerSelection === "paper") { 
            results.textContent = "Tie!" 
        }
        else { 
            results.textContent = "Lose!"
            computerScore++
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") { 
            results.textContent = "Lose!" 
            computerScore++
        }
        else if (computerSelection === "paper") { 
            results.textContent = "Win!" 
            playerScore++
        }
        else { 
            results.textContent = "Tie!"
        }
    } else { 
        return "Error" 
    }
    score.textContent = `Score: ${playerScore}-${computerScore}`
    if (playerScore === 5) {
        results.textContent += " Congratulations! You beat the computer!"
    } 
    if (computerScore === 5) {
        results.textContent += " Apologies! The computer is smarter than you :("
    } 
}