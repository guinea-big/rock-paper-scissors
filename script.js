function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1;

    let result;

    switch (randomNumber) {
        case 1:
            result = 'rock';
            break;
        case 2:
            result = 'paper';
            break;
        case 3:
            result = 'scissors';
            break;
        default:
            console.log('Something went wrong');
    }
    
    return result;
}

function getHumanChoice() {
    let result = prompt('Enter your choice', '');

    return result.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    switch (computerChoice) {
        case 'rock':
            if (humanChoice === 'rock') {
                console.log('Draw! Rock vs Rock');
            } else if (humanChoice === 'paper') {
                humanScore++;
                console.log('You win! Rock beats Paper');
            } else {
                computerScore++;
                console.log('You lose! Rock beats Scissors');
            }
            break;
        case 'paper':
            if (humanChoice === 'rock') {
                computerScore++;
                console.log('You lose! Paper beats Rock');
            } else if (humanChoice === 'paper') {
                console.log('Draw! Paper vs Paper');
            } else {
                humanScore++;
                console.log('You win! Scissors beat Paper');
            }
            break;
        case 'scissors':
            if (humanChoice === 'rock') {
                humanScore++;
                console.log('You win! Rock beats Scissors');
            } else if (humanChoice === 'paper') {
                computerScore++;
                console.log('You lose! Scissors beat Paper');
            } else {
                console.log('Draw! Scissors vs Scissors');
            }
    }
}