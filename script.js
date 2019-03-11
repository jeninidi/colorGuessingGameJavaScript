alert("Welcome to my mini color guessing game! ");
      var colors = ['blue', 'cyan', 'gold', 'gray', 'green', 
'magenta', 'orange', 'red', 'white', 'yellow' ];

var mainColors = colors.sort();
var finalized = false;
var guesses = 0;
var answer = colors[Math.floor(Math.random() * mainColors.length)];

function do_game() {
  var color_guess = prompt("I am thinking of these colors \n\n " + mainColors + "\n\n Can you guess which color I am thinking of?  ");
  guesses = guesses + 1;
  checkguess(color_guess);
}

function checkguess(color_guess) {
  if (color_guess == "stop") {
    return false;
  }

  if (colors.indexOf(color_guess) == -1) {
    alert("Sorry.  I don't recognize your color. \n\n Please try again!");
    do_game();
  }
  if (color_guess < answer) {
    alert("Sorry, your guess is not correct. \n\n Hint: your color is alphabetically lower than mine");
    do_game();
  }
  if (color_guess > answer) {
    alert("Sorry, your guess is not correct. \n\n Hint: your color is alphabetically higher than mine");
    do_game();
  }
  if (colors.indexOf(color_guess) >= 0) {
    alert("Congratulations! You have guessed the color! \n\n It took you  " + guesses + "  guesses to finish the game! \n\n You can see the color in the background!  ");
  }
  document.body.style.backgroundColor = answer;
}