// variables for wins, losses, guesses left and so far now , and letters
var wins = 0;
var losses = 0;
var guesses_left = 10;
var guesses_now = [];
var letters = "abcdefghijklmnopqrstuvwxyz"
// connections with html file by id
// diractions - it will disappear when a key is pressed
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var userChoiceArray = document.getElementById("user-guesses");
var emotions = document.getElementById("emotions");
// main function 
document.onkeyup = function (event) {
    // String.fromCharCode(event.keyCode).toLowerCase();
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    // console.log(guesses_now);

    if (letters.includes(userGuess)) {
        function random_character() {

            return letters.substr(Math.floor(Math.random() * letters.length), 1);
        }
        var computerGuess = random_character();

        
        if (userGuess === computerGuess) {
            directionsText.textContent = "";
            wins++;
            winsText.textContent = "Wins: " + wins;
            guessesLeft = 10;
            emotions.textContent = "Woohoo!! You got it!";

        }

        else if (userGuess !== computerGuess) {
            directionsText.textContent = "";
            losses++;
            lossesText.textContent = "Losses: " + losses;
            emotions.textContent = "Nope! Keep going!";
            if (guesses_left>=0) {
                guessesLeft.textContent = "Guesses Left: " + guesses_left;
                guesses_left --;
            }
            guesses_now.push(userGuess)
            userChoiceArray.textContent = "Your guesses so far: " + guesses_now;






        }
    }
}






