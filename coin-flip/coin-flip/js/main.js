// Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game
//received assistance from mentor Charles De Farias

// Store the user's guess (either 'heads' or 'tails')
let userGuess = null;

// Recording when Heads or Tails is clicked
document.querySelector('#heads').addEventListener('click', () => {
  userGuess = 'heads';
  console.log('You chose heads.');
});

document.querySelector('#tails').addEventListener('click', () => {
  userGuess = 'tails';
  console.log('You chose tails.');
});

// When the coin fliping button is clicked, run the flipCoin function
document.querySelector('#clickMe').addEventListener('click', flipCoin);

function flipCoin() {
  // Make sure the player choses something first
  if (!userGuess) {
    console.log('Please pick heads or tails before flipping!');
    return;
  }

  // Randomly decide heads or tails to imitate a coin flip
  const result = Math.random() < 0.5 ? 'heads' : 'tails';

  // Compare the guess and result and make a message
  const message = userGuess === result
    ? `You guessed ${userGuess} — it’s ${result}! You win!`
    : `You guessed ${userGuess} — it’s ${result}. You lose.`;

  // Show the result only in the console
  console.log(message);

  // Reset the guess for the next round
  userGuess = null;
}
