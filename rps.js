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
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`

    checkWinner();
};

const div = document.querySelector("div");

function checkWinner() {
    if (playerScore == 5 || computerScore == 5) {
        const replay = document.createElement("button");
        div.append(replay);
        replay.textContent = "Play again?";
    };

};