const rps = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return rps[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    
    if (playerChoice == computerSelection) {
        return "Tie";
    }
    else if (playerChoice == "rock") {
        switch (computerSelection) {
            case "paper":
                computerScore++;
                return "You lose! Paper beats Rock"
            case "scissors":
                playerScore++;
                return "You win! Rock beats Scissors"
        }
    }
    else if (playerChoice == "paper") {
        switch (computerSelection) {
            case "rock":
                playerScore++;
                return "You win! Paper beats Rock"
            case "scissors":
                computerScore++;
                return "You lose! Scissors beats Rock"
        }
    } else {
        switch (computerSelection) {
            case "rock":
                computerScore++;
                return "You lose! Rock beats Scissors"
            case "paper":
                playerScore++;
                return "You win! Scissors beats Paper"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        // Don't accept input if not rock, paper or scissors
        let playerSelection = "";
        while (!rps.includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Rock, Paper, or Scissors?");
        }
        console.log(playRound(playerSelection, computerPlay()));
        console.log(`Current score:\nPlayer: ${playerScore}\n Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("Player wins")
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins")
    } else {
        console.log("Tie")
    }
    playerScore = 0;
    computerScore = 0;
    return;
}