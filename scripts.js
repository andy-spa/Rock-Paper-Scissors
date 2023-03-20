
const buttons = document.querySelectorAll('button');
const playerDisplay = document.createElement('p');

const playerScore = document.querySelector('.playerScore')
let playerCount = 0;
playerScore.textContent = `${playerCount}`;

const computerScore = document.querySelector('.computerScore')
let computerCount = 0;
computerScore.textContent = `${computerCount}`;

const resultText = document.querySelector('.resultText')


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, getComputerChoice());
        if (result.includes(`win! `)) {

            playerScore.textContent = `${playerCount+= 1}`;
            resultText.textContent = `${result}`;
            if (playerCount == 5){
                playerCount = 0;
                playerScore.textContent = `${playerCount}`
                computerCount = 0; 
                computerScore.textContent = `${computerCount}`;
                resultText.textContent = `YOU HAVE WON THE MATCH click an option to rematch...`;
            }

        }
        else if (result.includes(`loose! `)) {
            computerScore.textContent = `${computerCount += 1}`;
            resultText.textContent = `${result}`;
            if (computerCount == 5){
                playerCount = 0;
                playerScore.textContent = `${playerCount}`
                computerCount = 0; 
                computerScore.textContent = `${computerCount}`;
                resultText.textContent = `YOU HAVE LOST THE MATCH, click an option to rematch...`;
            }
        }
        else {

            resultText.textContent = `${result}`;
        }
    })
});
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    }
    else if (choice === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    //case insensitive solution
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //Tie cases
    if (playerSelection === computerSelection) {
        return "Its a Tie.";
    }
    // player win cases
    else if (((playerSelection === 'rock') && (computerSelection === 'scissors')) || ((playerSelection === 'paper') && (computerSelection === 'rock')) || ((playerSelection === 'scissors') && (computerSelection === 'paper'))) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        return `You loose! ${computerSelection} beats ${playerSelection}.`;
    }
}

