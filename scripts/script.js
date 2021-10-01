// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalRounds = 5;
let playerSelection = '';
let compSelection = '';
const itemArr = ['rock', 'paper', 'scissor'];

const div = document.querySelector('.info');
const info = document.createElement('p');
info.innerText = `Your choice: None
                  Computer's choice: None
                  You have won: None
                  Computer has won: None`;
div.appendChild(info);


const buttons = document.querySelectorAll('button');

buttons.forEach(startGame);
function startGame(button){
  button.addEventListener('click', playRound);
  function playRound(e){
    playerSelection = e.target.id;
    let randomNumber = Math.floor(Math.random() * 3);
    compSelection = itemArr[randomNumber];
    compareSelections();
  }
}

function compareSelections(){
  if ( (playerSelection === 'rock' && compSelection === 'paper') || 
            (playerSelection === 'scissor' && compSelection === 'rock') || 
            (playerSelection === 'paper' && compSelection === 'scissor') ){
    compScore = ++compScore;
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  You lost this round.
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
  } else if ( (playerSelection === 'rock' && compSelection === 'scissor') || 
            (playerSelection === 'scissor' && compSelection === 'paper') || 
            (playerSelection === 'paper' && compSelection === 'rock') ){
    playerScore = ++playerScore;
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  You won this round.
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
  } else {
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  Draw!
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
    }
}

function declareWinner(){
  if (playerScore < compScore){
    info.innerText = `Computer has won total ${totalRounds} rounds.`;
    div.appendChild(info);
  } else {
    info.innerText = `You has won total ${totalRounds} rounds.`;
    div.appendChild(info);
  }
}