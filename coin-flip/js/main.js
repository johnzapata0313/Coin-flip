// Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game
// Import fs and http modules
// use http to create the server
// use fs to read my HTML file
// open page up, page starts with heads and there's a button that generates a coin flip
// -------------------------------
// main.js

// Store the user's guess (either 'heads' or 'tails')
let userGuess = null;

// When "Heads" or "Tails" is clicked, store the guess
document.querySelector('#heads').addEventListener('click', () => {
  userGuess = 'heads';
  console.log('You chose heads.');
});

document.querySelector('#tails').addEventListener('click', () => {
  userGuess = 'tails';
  console.log('You chose tails.');
});

// When "Flip Coin" is clicked, run the flipCoin function
document.querySelector('#clickMe').addEventListener('click', flipCoin);

function flipCoin() {
  // Make sure the user chose something first
  if (!userGuess) {
    console.log('Please pick heads or tails before flipping!');
    return;
  }

  // Randomly decide heads or tails
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
