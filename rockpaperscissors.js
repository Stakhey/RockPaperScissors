"type strict";

const gameChoice = [
    "Rock",
    "Paper", 
    "Scissors"];

const gameRandom = Math.floor(Math.random() * (gameChoice.length));

console.log("Hello!");

function gameChoices() { 
    let computerChoice = console.log(gameChoice[gameRandom]) 
    let userChoice = prompt("Enter your pick: ") 
    return computerChoice
    return userChoice
}; 

function gameRound(userChoice, computerChoice){
    console.log()
    switch (userChoice, computerChoice) {
        case userChoice = computerChoice: 
        console.log("Draw!")
    }
    
}

gameChoices();
gameRound(userChoice, computerChoice);