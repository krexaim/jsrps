const rps = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// const btn = document.querySelector("btn");
// btn.addEventListener("click", () => {
//     console.log("Abc")
// });
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.innerHTML);
    });
});

function computerPlay() {
    return rps[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return "Tie";
    }

    // Player win cases
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper") {
        
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`
        }
    
    // Computer win cases
    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`
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
