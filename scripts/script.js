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
buttons.forEach(setPlayerSelection);
function setPlayerSelection(button){
  button.addEventListener('click', playRound);
  function playRound(e){
    playerSelection = e.target.id;
    while (playerScore < totalRounds && compScore < totalRounds){
      compPlay();
      compareSelections();
    }
    declareWinner();
  }
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
    info.innerText = '';
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  You lost this round.
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
  } else if ( (playerSelection === 'rock' && compPlay() === 'scissor') || 
            (playerSelection === 'scissor' && compPlay() === 'paper') || 
            (playerSelection === 'paper' && compPlay() === 'rock') ){
    playerScore = ++playerScore;
    info.innerText = '';
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  You won this round.
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
  } else {
    info.innerText = '';
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  Draw!
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
    }
}

// Declare a winner when player or computer has won total rounds
function declareWinner(){
  if (playerScore < compScore){
    info.innerText = `Computer has won total ${totalRounds} rounds.`;
    div.appendChild(info);
  } else {
    info.innerText = `You has won total ${totalRounds} rounds.`;
    div.appendChild(info);
  }
}