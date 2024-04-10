let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

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

  document.getElementById('result').innerText = result;
  document.getElementById('score').innerText = `Score: Player - ${playerScore}, Computer - ${computerScore}`;
}