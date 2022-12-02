//console.log('Hello World!');

function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return ("You win! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose! Rock beats scissors");
    }
}

const computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon");
playerSelection = playerSelection.toLowerCase();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = computerPlay();

    for (let counter = 0; counter <= 5; ++counter) {
        computerPlay();

        if (roundResult === "You win, rock beats scissors" || roundResult === "You win, paper beats rock." || roundResult === "You win, scissors beats paper.") {
            ++playerScore;
        } else if (roundResult === "You lose, paper beats rock." || roundResult === "You lose, scissors beats paper." || roundResult === "You lose, rock beats scissors.") {
            ++computerScore
        }
    }

    if (playerScore > computerScore) {
        return ("You win " + playerScore + " to " + computerScore + '.');
    } else if (playerScore < computerScore) {
        return ("You lose " + computerScore + " to " + playerScore + '.');
    } else {
        return "It was a tie, you and the computer won the same number of rounds.^u^";
        }
}