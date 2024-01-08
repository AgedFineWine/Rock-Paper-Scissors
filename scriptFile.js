function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else{
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return ['Tie! The computer chose rock', 0];
        } else if (computerSelection === 'paper'){
            return ['You Lose! The computer chose paper', 1];
        } else if (computerSelection === 'scissors'){
            return ['You Win! The computer chose scissors', 2];
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock'){
            return ['You Win! The computer chose rock', 2];
        } else if (computerSelection === 'paper'){
            return ['Tie! The computer chose paper', 0];
        } else if (computerSelection === 'scissors'){
            return ['You Lose! The computer chose scissors', 1];
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock'){
            return ['You Lose! The computer chose rock', 1];
        } else if (computerSelection === 'paper'){
            return ['You Win! The computer chose paper', 2];
        } else if (computerSelection === 'scissors'){
            return ['Tie! The computer chose scissors', 0];
        }
    }
}

function verdict(scoreCount, lossCount) {
    if (scoreCount > lossCount){
        console.log(`VERDICT: Player wins! You beat the computer ${scoreCount}/5 times!`);
    } else if (scoreCount === lossCount){
        console.log(`VERDICT: Tie! No one won or lost`);
    } else{
        console.log(`VERDICT: Player loses! The computer has won ${lossCount}/5 times!`);
    }
}

function game(playerSelection) {
    let scoreCount = 0;
    let lossCount = 0;
    // playerSelection = playerSelection.toLowerCase();

    let computerSelection = getComputerChoice();
    let resultArray = playRound(playerSelection, computerSelection);
    if ((resultArray[1]) === 0){
        console.log(resultArray[0], `[Player: ${scoreCount} / Computer: ${lossCount}]`);
    } else if (resultArray[1] === 2){
        scoreCount += 1;
        console.log(resultArray[0], `[Player: ${scoreCount} / Computer: ${lossCount}]`);
    } else if (resultArray[1] === 1){
        lossCount += 1;
        console.log(resultArray[0], `[Player: ${scoreCount} / Computer: ${lossCount}]`);
    }
    verdict(scoreCount, lossCount);
}

function main() {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => game('rock'));
    paper.addEventListener('click', () => game('paper'));
    scissors.addEventListener('click', () => game('scissors'));

}

main()

