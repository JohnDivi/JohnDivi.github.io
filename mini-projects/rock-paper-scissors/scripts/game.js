function playGame(playerChoice) {

    let counters = {};
    counters["Rock"] = "Paper";
    counters["Paper"] = "Scissors";
    counters["Scissors"] = "Rock";

    let playerScore = parseInt(document.querySelector("#player").innerHTML);
    let computerScore = parseInt(document.querySelector("#bot").innerHTML);

    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "Rock";
    }   
    else if (computerChoice === 1) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    if (counters[playerChoice] === counters[computerChoice]) {
        // Draw
        document.querySelector(".round-result").innerHTML = "Round is a draw!";
    }
    else if (counters[playerChoice] === computerChoice) {
        // Computer win
        computerScore++;
        document.querySelector(".round-result").innerHTML = "Bot wins the round!";
    }
    else {
        // Player win
        playerScore++;
        document.querySelector(".round-result").innerHTML = "Player wins the round!";
    }

    // Set scores
    document.querySelector("#player").innerHTML = playerScore.toString();
    document.querySelector("#bot").innerHTML = computerScore.toString();

    // Set round info
    document.querySelector(".player-info").innerHTML = `Player chose: ${playerChoice}`;
    document.querySelector(".computer-info").innerHTML = `Computer chose: ${computerChoice}`;
}

document.querySelector("#rock").addEventListener("click", () => playGame("Rock"));
document.querySelector("#paper").addEventListener("click", () => playGame("Paper"));
document.querySelector("#scissors").addEventListener("click", () => playGame("Scissors"));
