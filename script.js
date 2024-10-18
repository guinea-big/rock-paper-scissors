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

