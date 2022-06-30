const rps = ["rock", "paper", "scissors"]

function computerPlay() {
    return rps[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let playerchoice = playerSelection.toLowerCase();
    
    if (playerchoice == computerSelection) {
        return "Tie";
    }
    else if (playerchoice == "rock") {
        switch (computerSelection) {
            case "paper":
                return "You lose! Paper beats Rock"
            case "scissors":
                return "You win! Rock beats Scissors"
        }
    }
    else if (playerchoice == "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win! Paper beats Rock"
            case "scissors":
                return "You lose! Scissors beats Rock"
        }
    } else {
        switch (computerSelection) {
            case "rock":
                return "You lose! Rock beats Scissors"
            case "paper":
                return "You win! Scissors beats Paper"
        }
    }
    
}