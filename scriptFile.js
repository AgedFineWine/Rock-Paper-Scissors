class RockPaperScissorsGame {
    constructor() {
        this.scoreCount = 0;
        this.lossCount = 0;
        this.roundsPlayed = 0;

    }

    getComputerChoice() {
        let choice = Math.floor(Math.random() * 3);
        if (choice === 0) {
            return 'rock';
        } else if (choice === 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    getRoundResult(playerSelection, computerChoice) {
        if (playerSelection === 'rock'){
            if (computerChoice === 'rock'){
                return 'tie';
            } else if (computerChoice === 'paper'){
                return 'lose';
            } else if (computerChoice === 'scissors'){
                return 'win';
            }
        } else if (playerSelection === 'paper'){
            if (computerChoice === 'rock'){
                return 'win';
            } else if (computerChoice === 'paper'){
                return 'tie';
            } else if (computerChoice === 'scissors'){
                return 'lose';
            }
        } else if (playerSelection === 'scissors'){
            if (computerChoice === 'rock'){
                return 'lose';
            } else if (computerChoice === 'paper'){
                return 'win';
            } else if (computerChoice === 'scissors'){
                return 'tie';
            }
        }
    }

    displayResult(result, playerSelection, computerChoice) {
        document.querySelector('#final-msg').textContent = '';
        let resultMsg;
        if (result === 'tie') {
            resultMsg = "It's a tie!";
        } else if (result === 'win') {
            resultMsg = `You win! ${playerSelection} beats ${computerChoice}`;
        } else if (result === 'lose') {
            resultMsg = `You lose! ${computerChoice} beats ${playerSelection}`;
        }
        document.querySelector('#result').textContent = resultMsg;
    }

    displayFinalResult() {
        let finalMsg;
        if (this.scoreCount > this.lossCount) {
            finalMsg = 'You beat the computer!';
        } else if (this.scoreCount < this.lossCount) {
            finalMsg = 'You lost against the computer!';
        } else {
            finalMsg = "It's a tie!"
        }
        document.querySelector('#result').textContent = finalMsg;
        document.querySelector('#final-msg').textContent = 'Click the reset button to continue playing';
    }

    updateNumbers(result) {
        if (result === 'win') {
            this.scoreCount += 1;
        } else if (result === 'lose') {
            this.lossCount += 1;
        }
        this.roundsPlayed += 1;
        document.querySelector('#score').textContent = `Score: ${this.scoreCount} - ${this.lossCount}`;
    }

    resetGame() {
        this.scoreCount = 0;
        this.lossCount = 0;
        this.roundsPlayed = 0;
        document.querySelector('#result').textContent = 'Chose an option to start the game!';
        document.querySelector('#final-msg').textContent = '';
        const btns = document.querySelectorAll('.btn-choice')
        btns.forEach(btnReference => {
            btnReference.addEventListener('click', () => this.playRound(btnReference.id));
        });

    }
    
    pauseGame() {
        const btns = document.querySelectorAll('.btn-choice')
        btns.forEach(btnReference => {
            btnReference.removeEventListener('click', () => this.playRound(btnReference.id));
        });
    }

    playRound(playerSelection) {

        const computerChoice = this.getComputerChoice();
        const roundResult = this.getRoundResult(playerSelection, computerChoice);
        
        this.displayResult(roundResult, playerSelection, computerChoice);
        this.updateNumbers(roundResult);

        if (this.roundsPlayed === 5) {
            this.displayFinalResult();
            this.pauseGame();
        }
    }
}

function main() {
    const game = new RockPaperScissorsGame();
    const btns = document.querySelectorAll('.btn-choice');
    const resetBtn = document.querySelector('#reset');

    btns.forEach(btnReference => {
        btnReference.addEventListener('click', () => game.playRound(btnReference.id));
    });
    resetBtn.addEventListener('click', () => {
        game.resetGame();
    });
}

main()