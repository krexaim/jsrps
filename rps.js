const rps = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    return rps[Math.floor(Math.random() * 3)]
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.innerHTML, computerPlay());
    });
    
});

const results = document.querySelector("#results");
const score = document.querySelector("#score");

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = `Draw!`
    }

    // Player win cases
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
             playerSelection == "Paper" && computerSelection == "Rock" ||
             playerSelection == "Scissors" && computerSelection == "Paper") {
        
        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
    }
    
    // Computer win cases
    else {
        computerScore++;
        results.textContent = `You lose! ${playerSelection} loses to ${computerSelection}.`
    }

    // Display current score
    score.textContent = `You: ${playerScore}\nComputer: ${computerScore}`
};

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
};
