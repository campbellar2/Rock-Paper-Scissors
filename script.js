// A function to create the computer 'opponent' user will be playing against 
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}
