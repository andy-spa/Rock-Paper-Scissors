// generate random choice(rock,paper,scissors) Function

getComputerChoice = function() {
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return 'Rock';
    }
    else if(choice === 1){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

playRound = function(playerSelection, computerSelection){
    
    //case insensitive solution
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //Tie cases
    if(playerSelection === computerSelection){
        return "Its a Tie";
    }
    // player win cases
    else if(((playerSelection === 'rock') && (computerSelection === 'scissors')) || ((playerSelection === 'paper') && (computerSelection === 'rock')) || ((playerSelection === 'scissors') && (computerSelection === 'paper'))){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else{
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); 

game = function(){

    //initialize score counters
    let playerScore = 0;
    let computerScore = 0;

    //loop to play five times
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock Paper or Scissors?");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection); 
        
        //check result and update scores
        if(result.includes("You win!")){
            playerScore++;
        }
        else if(result.includes("You loose!"))
        {
            computerScore++;
        }
        // output current score
        console.log(result);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);

    }
    // output final score
    if(playerScore > computerScore)
    {
        console.log("Player Wins")
    }
    else if(playerScore < computerScore){
        console.log("Computer wins")
    }
    else{
        console.log("No winners, tie")
    }
}
game();
