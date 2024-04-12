/* Users starting score 0,0 */
let playerScore = 0;
let computerScore = 0;

/* adding math.random for random selection from the choices array */
function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  /* JS for the results outcome, if,else if and else statements */
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'Player wins!';
    playerScore++;
  } else {
    result = 'Computer wins!';
    computerScore++;
  }
  /* Updates the webpage for user to see the score of latest round */
  document.getElementById('result').innerText = result;
  /* Show current score, both user and computer score */
  document.getElementById('score').innerText = `Score: Player - ${playerScore}, Computer - ${computerScore}`;
}