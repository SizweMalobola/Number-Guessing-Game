// variables
// input
var guessInput = document.querySelector("#guessInput");
// event
var submitBtn = document.querySelector("#submitBtn");
var restartBtn = document.querySelector("#restart");
//display output
var displayPrevGuesses = document.querySelector(".previous-guesses");
var guessStatus = document.querySelector(".guess-status");
var displayHint = document.querySelector(".guess-hint");
//
//state varibles
var trys = 10;
var answer = Math.floor(Math.random() * 200);

console.log(answer);
//
//logic
function start(prevG, guesStat, dispHint) {
  prevG.style.visibility = "visible";
  guesStat.style.visibility = "visible";
  dispHint.style.visibility = "visible";
}
function end(guesInput, prevG, guesStat, dispHint) {
  guesInput.value = "";
  prevG.innerText = "Previous Guesses: ";
  prevG.style.visibility = "hidden";
  guesStat.style.visibility = "hidden";
  dispHint.style.visibility = "hidden";
}
function answerRange(num, numG) {
  if (num == numG) {
    guessStatus.innerText = "Winner Winner Chicken Dinner!";
    displayHint.style.visibility = "hidden";
    restartBtn.style.visibility = "visible";
    answer = Math.floor(Math.random() * 200);
  } else if (num > numG) {
    displayHint.innerText = "Your previous guess was too high";
    displayPrevGuesses.innerText += " " + num;
    guessStatus.innerText = "Wrong Guess";
    trys--;
  } else if (num < numG) {
    displayHint.innerText = "Your prevous guess was too low";
    displayPrevGuesses.innerText += " " + num;
    guessStatus.innerText = "Wrong Guess";
    trys--;
  }
}
function gameOver(numTrys) {
  if (numTrys == 0) {
    guessStatus.innerText = `GAME OVER! THE ANSWER WAS ${answer}`;
    restartBtn.style.visibility = "visible";
  }
}
// events
submitBtn.addEventListener("click", function () {
  if (guessInput.value !== "") {
    start(displayPrevGuesses, guessStatus, displayHint);
    answerRange(guessInput.value, answer);
    console.log(trys);
    console.log(answer);
    gameOver(trys);
  }
});

restartBtn.addEventListener("click", function (e) {
  end(guessInput, displayPrevGuesses, guessStatus, displayHint);
  answer = Math.floor(Math.random() * 200);
  trys = 10;
  e.target.style.visibility = "hidden";
});
