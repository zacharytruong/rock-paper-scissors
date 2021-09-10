// Declare scores
let playerScore = 0;
let compScore = 0;
let totalRounds = 5;
// Play a single round
const playRound = () => {
    // Ask for a user's input
    const playerSelection = prompt('Please choose 1 of 3 options: rock, paper, or scissors:');
    
    let playerPlay = playerSelection.toUpperCase();
    // Create a function to randomly return a number 1 - 3
    let random = Math.ceil(Math.random() * 3);
    // Convert the random number to 1 of 3 options in the game
    const convert = () => {
        switch (random){
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
    // Set the selection of the computer from the random number
    const computerPlay = convert();

    // Print out player and computer selections
    console.log(`Player's selection: ${playerPlay}`);
    console.log(`Computer's selection: ${computerPlay}`);

    // Condition
    if (playerPlay === computerPlay){
        console.log('Draw');
    } else if ( (playerPlay === 'ROCK' && computerPlay === 'PAPER') || 
                (playerPlay === 'SCISSORS' && computerPlay === 'ROCK') || 
                (playerPlay === 'PAPER' && computerPlay === 'SCISSORS') ){
        console.log('You lose');
        compScore = ++compScore;
        
    } else if ( (playerPlay === 'ROCK' && computerPlay === 'SCISSORS') || 
                (playerPlay === 'SCISSORS' && computerPlay === 'PAPER') || 
                (playerPlay === 'PAPER' && computerPlay === 'ROCK') ){
        console.log('You won');
        playerScore = ++playerScore;
        
    } else {
        console.log('You need to choose 1 of 3 options:rock, paper, or scissors.');
    }
}
// Play five games then print the results
const game = () => {
    while (compScore < totalRounds && playerScore < totalRounds){
        playRound();
        console.log(`Computer's score: ${compScore}`);
        console.log(`Player's score: ${playerScore}`);
    }
    if (compScore < totalRounds || playerScore < totalRounds){
        declareWinner();
    }
}
function declareWinner(){
    if (compScore > playerScore){
        console.log(`Computer has won ${totalRounds} rounds.`)
    } else {
        console.log(`You have won ${totalRounds} rounds.`)
    }
}
game();