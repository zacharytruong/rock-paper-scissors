// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalRounds = 3;

// Generate a random number, then assign it as computer selection
let randomNumber = Math.ceil(Math.random() * 3);
function computerPlay(){
    switch (randomNumber){
        case 1:
            return 'ROCK';
            break;
        case 2:
            return 'PAPER';
            break;
        case 3:
            return 'SCISSORS';
            break;
    }
}

// Compare user's selection and computer's selection
function compareSelections(playerPlay, computerPlay){
    if (playerPlay === computerPlay()){
        console.log(`Player's selection: ${playerPlay}`);
        console.log(`Computer's selection: ${computerPlay()}`);
        console.log('Draw');
    } else if ( (playerPlay === 'ROCK' && computerPlay() === 'PAPER') || 
                (playerPlay === 'SCISSORS' && computerPlay() === 'ROCK') || 
                (playerPlay === 'PAPER' && computerPlay() === 'SCISSORS') ){
        console.log(`Player's selection: ${playerPlay}`);
        console.log(`Computer's selection: ${computerPlay()}`);
        console.log('You lose');
        compScore = ++compScore;
    } else if ( (playerPlay === 'ROCK' && computerPlay() === 'SCISSORS') || 
                (playerPlay === 'SCISSORS' && computerPlay() === 'PAPER') || 
                (playerPlay === 'PAPER' && computerPlay() === 'ROCK') ){
        console.log(`Player's selection: ${playerPlay}`);
        console.log(`Computer's selection: ${computerPlay()}`);
        console.log('You won');
        playerScore = ++playerScore;
    } else {
        console.log('You need to choose 1 of 3 options:rock, paper, or scissors.');
    }
}

// Play a single round
function playRound(){
    let playerSelection = prompt('Please choose 1 of 3 options: rock, paper, or scissors:');
    let playerPlay = playerSelection.toUpperCase();
        compareSelections(playerPlay, computerPlay);
        
}

// Declare a winner when player or computer has won total rounds
function declareWinner(){
    if (compScore > playerScore){
        console.log(`Computer has won ${totalRounds} rounds.`)
    } else {
        console.log(`You have won ${totalRounds} rounds.`)
    }
}

// Play game until player or computer has won total rounds
function startGame(){
    let i = 1;
    while (compScore < totalRounds && playerScore < totalRounds){
        console.log(`Game #${i}:`);
        i += 1;
        playRound();
        console.log(`Computer's score: ${compScore}`);
        console.log(`Player's score: ${playerScore}`);
    }
    declareWinner(); 
}

startGame();