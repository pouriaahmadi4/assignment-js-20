// storing vars by DOM - selecting
let btnNewGame = document.querySelector(".btnNewGame");
let inputsValues = document.querySelector(".inputs-Values");
let btnGuess = document.querySelector(".btnGuess");
let triesOutput = document.querySelector(".Tries-output");
let finalOutput = document.querySelector(".final-output");
// generating randim number
let randomNumber = Math.floor(Math.random() * 100 + 1);

// cooler features vars initializatopn:
let numberOfTries = 0;
let valuesArr = [];

function guessNumber() {
  //Collect input from the user
  // let guess = document.querySelector(".inputs-Values").value;
  let guess = parseInt(inputsValues.value);
  valuesArr.push(guess);
  const maxTries = 6;

  if (valuesArr.length>= maxTries) {
    triesOutput.textContent = `You Lose, the number was ${randomNumber}`;
    return;
  }

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (isNaN(guess)|| guess<1 || guess === "" || guess>100){
    finalOutput.textContent = "Please enter a number between 1 and 100";
    return;
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

  if (guess === randomNumber) {
    finalOutput.textContent = `Guess is correct. You win! It took you ${valuesArr.length} tries 🎁`;
  } else if (guess > randomNumber) {
    finalOutput.textContent = "Number is too high, try again";
  } else {
    finalOutput.textContent = "Number is too low, try again";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1)
  //Reset users input field
  inputsValues.value = "";
  //Reset tries, and triesTaken by the user
  triesOutput.textContent = "";
  finalOutput.textContent = "Guess a number between 1 and 100";
  valuesArr = [];
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnNewGame").addEventListener("click",newGame)
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
