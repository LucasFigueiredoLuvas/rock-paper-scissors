const gStatus = {
    computerScore: 0, 
    playerScore: 0,
    totalScore: 0,
    round: 'TIE',
    playerMove: '',
    computerMove: ''
};

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerUI = document.getElementById('human');
const humanUI = document.getElementById('computer');
const scoreUI = document.getElementById('scores');
const move = document.getElementById('move');
const results = document.getElementById('restart');
const statusUI = document.getElementById('game-status');
const endGameUI = document.getElementById('end-game');
const endGame = document.createElement('h1');
const finalScore = document.createElement('h1');
const endGameButton = document.createElement('button');

function ui() {
    if(gStatus.totalScore > 4) {
        statusUI.style.display = 'none';
        endGame.textContent = 'END GAME';
        endGameButton.textContent = 'RESTART';
        endGameButton.className = 'restart';
        finalScore.textContent = `COMPUTER: ${gStatus.computerScore} VS ${gStatus.playerScore} :HUMAN`;
        endGameUI.appendChild(endGameButton);
        endGameUI.appendChild(endGame);
        endGameUI.appendChild(finalScore);
    }
    else {
        humanUI.textContent = `HUMAN: ${gStatus.playerMove}`;
        computerUI.textContent = `COMPUTER: ${gStatus.computerMove}`;
        scoreUI.textContent = `COMPUTER: ${gStatus.computerScore} VS ${gStatus.playerScore} :HUMAN`;
    }
   
}

function getComputerChoice() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = parseInt(Math.random() * 3);
    return options[random];
}

function playRound(player, computer) {
    gStatus.playerMove = player;
    gStatus.computerMove = computer;

    if(player == computer) {
        gStatus.round = 'TIE';
    }
    if((computer === 'ROCK' && player === 'SCISSORS') ||
    (computer === 'SCISSORS' && player === 'PAPER') ||
    (computer === 'PAPER' && player === 'ROCK')) 
    {
        gStatus.totalScore += 1;
        gStatus.computerScore += 1;
        gStatus.round = 'COMPUTER';
    }
    if((player === 'ROCK' && computer === 'SCISSORS') ||
        (player === 'SCISSORS' && computer === 'PAPER') ||
        (player === 'PAPER' && computer === 'ROCK'))
    {
        gStatus.totalScore += 1;
        gStatus.playerScore += 1;
        gStatus.round = 'PLAYER';
    }
}

function round() {
    rock.addEventListener('click', () => {
        playRound('ROCK', getComputerChoice())
        ui();
    });
    paper.addEventListener('click', () => {
        playRound('PAPER', getComputerChoice())
        ui();
    });
    scissors.addEventListener('click', () => {
        playRound('SCISSORS', getComputerChoice());
        ui();
    });
}

function main() {
    round();
}

main();