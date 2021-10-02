// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalRounds = 5;
let playerSelection = '';
let compSelection = '';
const itemArr = ['rock', 'paper', 'scissor'];
const div = document.querySelector('.info');
const info = document.createElement('p');
info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}

                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
div.appendChild(info);

const buttons = document.querySelectorAll('button');
buttons.forEach(startEvent);
function startEvent(button){
  button.addEventListener('click', playGame);
  function playGame(e){
    if (e.target.id === 'reset'){
      playerScore = 0;
      compScore = 0;
      info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}

                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
      div.appendChild(info);
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
    if (compScore === 5) return declareWinner();
    capitalizeStr();
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  Computer won this round. 
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
  } else if ( (playerSelection === 'rock' && compSelection === 'scissor') || 
            (playerSelection === 'scissor' && compSelection === 'paper') || 
            (playerSelection === 'paper' && compSelection === 'rock') ){
    ++playerScore;
    capitalizeStr();
    info.innerText = `Your choice: ${playerSelection}
                  Computer's choice: ${compSelection}
                  You won this round. 
                  You have won: ${playerScore}
                  Computer has won: ${compScore}`;
    div.appendChild(info);
    if (playerScore === 5) return declareWinner();
  } else {
    capitalizeStr();
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
    info.innerText = `Your choice: ${playerSelection}
                      Computer's choice: ${compSelection}
                      You have won: ${playerScore}
                      Computer has won total ${totalRounds} rounds.`;
    div.appendChild(info);
  } else {
    info.innerText = `Your choice: ${playerSelection}
                      Computer's choice: ${compSelection}
                      Computer has won: ${compScore}
                      You have won total ${totalRounds} rounds.`;
    div.appendChild(info);
  }
}

function capitalizeStr(){
  playerSelection = playerSelection.toUpperCase();
  compSelection = compSelection.toUpperCase();
}