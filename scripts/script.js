// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalRounds = 5;
let playerSelection = '';
let compSelection = '';
const playerInfo = document.querySelector('.playerInfo');
const compInfo = document.querySelector('.compInfo');
const singleGameResult = document.querySelector('.compInfo');
const currentPlayerScore = document.querySelector('.currentPlayerScore');
const currentCompScore = document.querySelector('.currentCompScore');
const finalResult = document.querySelector('.finalResult');
const itemArr = ['rock', 'paper', 'scissor'];


const buttons = document.querySelectorAll('button');
buttons.forEach(setPlayerSelection);

function setPlayerSelection(button){
    button.addEventListener('click', findID);
    function findID(e){
      playerSelection = e.target.id;
      return playerSelection;
    }
    return playerSelection;
}

// Generate a random number, then assign it as computer selection

function compPlay(){
  let randomNumber = Math.floor(Math.random() * 3);
  return compSelection = itemArr[randomNumber];
}

// Compare user's selection and computer's selection
function compareSelections(){
  if ( (playerSelection === 'rock' && compPlay() === 'paper') || 
            (playerSelection === 'scissor' && compPlay() === 'rock') || 
            (playerSelection === 'paper' && compPlay() === 'scissor') ){
    compScore = ++compScore;
    
  } else if ( (playerSelection === 'rock' && compPlay() === 'scissor') || 
            (playerSelection === 'scissor' && compPlay() === 'paper') || 
            (playerSelection === 'paper' && compPlay() === 'rock') ){
    
    playerScore = ++playerScore;
  } else {

    }
}

// Play a single round
function playRound(){
        
}

// Declare a winner when player or computer has won total rounds
function declareWinner(){
    
}

// Play game until player or computer has won total rounds
function startGame(){
    
}

// startGame();