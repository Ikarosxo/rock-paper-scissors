let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let number = getRandomInt(3);
    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Error in computer choice");
            return "rock"; // Valor por defecto por si acaso
    }
}

function getHumanChoice() {
    let choice = prompt("Write your move (rock, paper, scissors):");
    return choice.toLowerCase(); // Corregido: ahora sí convierte a minúsculas
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log("You lose! Paper covers Rock");
        ++computerScore;
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        console.log("You win! Rock breaks Scissors");
        ++humanScore;
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        console.log("You lose! Scissors cut Paper");
        ++computerScore;
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        console.log("You win! Paper covers Rock");
        ++humanScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        console.log("You win! Scissors cut Paper");
        ++humanScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        console.log("You lose! Rock breaks Scissors");
        ++computerScore;
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw! Try again");
    } else {
        console.log("Invalid input! Please choose rock, paper, or scissors.");
    }
}

function playGame() {
    for (let i = 0; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    
    // Mostrar resultado final
    console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Iniciar el juego
playGame();