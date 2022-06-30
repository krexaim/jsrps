const rps = ["rock", "paper", "scissors"];
let playerscore = 0;
let computerscore = 0;

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
                computerscore++;
                return "You lose! Paper beats Rock"
            case "scissors":
                playerscore++;
                return "You win! Rock beats Scissors"
        }
    }
    else if (playerchoice == "paper") {
        switch (computerSelection) {
            case "rock":
                playerscore++;
                return "You win! Paper beats Rock"
            case "scissors":
                computerscore++;
                return "You lose! Scissors beats Rock"
        }
    } else {
        switch (computerSelection) {
            case "rock":
                computerscore++;
                return "You lose! Rock beats Scissors"
            case "paper":
                playerscore++;
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
        console.log(`Current score:\nPlayer: ${playerscore}\n Computer: ${computerscore}`);
    }
    if (playerscore > computerscore) {
        console.log("Player wins")
    }
    else if (playerscore < computerscore) {
        console.log("Computer wins")
    } else {
        console.log("Tie")
    }
    playerscore = 0;
    computerscore = 0;
    return;
}