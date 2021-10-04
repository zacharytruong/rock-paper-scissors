// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalRounds = 5;
let playerSelection = '';
let compSelection = '';
const itemArr = ['rock', 'paper', 'scissor'];
const info = document.querySelector('.info');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
const para = document.createElement('p');

const buttons = document.querySelectorAll('button');
buttons.forEach(startEvent);
function startEvent(button){
  button.addEventListener('click', playGame);
  function playGame(e){
    if (e.target.id === 'newGame'){
      playerScore = 0;
      compScore = 0;
      info.innerText = `INFO BOX`;
    } else if (playerScore < 5 && compScore < 5){
      playerSelection = e.target.id;
      let randomNum = Math.floor(Math.random() * 3);
      compSelection = itemArr[randomNum];
      getResults();
    } else declareWinner();
  }
}
function getResults(){
  if ( (playerSelection === 'rock' && compSelection === 'paper') || 
            (playerSelection === 'scissor' && compSelection === 'rock') || 
            (playerSelection === 'paper' && compSelection === 'scissor') ){
    ++compScore;
    capitalizeStr();
    info.innerText = `Computer played ${compSelection}. ${compSelection} beats ${playerSelection}. Computer won this round.`;
    displayScores()
  } else if ( (playerSelection === 'rock' && compSelection === 'scissor') || 
            (playerSelection === 'scissor' && compSelection === 'paper') || 
            (playerSelection === 'paper' && compSelection === 'rock') ){
    ++playerScore;
    capitalizeStr();
    info.innerText = `Computer played ${compSelection}. ${playerSelection} beats ${compSelection}. You won this round.`;
    displayScores()
  } else {
    capitalizeStr();
    info.innerText = `Computer played ${compSelection}. Draw!`;
    displayScores()
  }
  if (playerScore === 5 || compScore === 5){
    para.innerText = declareWinner();
  }
}

function declareWinner(){
  if (playerScore < compScore){
    info.innerText = `Computer played ${compSelection}.
                      ${compSelection} beats ${playerSelection}.
                      Computer has won total ${totalRounds} rounds. 
                      Click 'New Game' button to start a new game.`;
  } else {
    info.innerText = `Computer played ${compSelection}.
                      ${playerSelection} beats ${compSelection}.
                      You have won total ${totalRounds} rounds.
                      Click 'New Game' button to start a new game.`;
  }
}

function capitalizeStr(){
  playerSelection = playerSelection.toUpperCase();
  compSelection = compSelection.toUpperCase();
}

function displayScores(){
  player.innerText = playerScore;
  computer.innerText = compScore;
}