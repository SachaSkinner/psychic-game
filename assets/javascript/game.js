// variables for wins, losses, guesses left and so far now , and letters
var wins = 0;
var losses = 0;
var guesses_left = 20;
var guesses_now = [];
var gameInProgress = true;
var letters = "abcdefghijklmnopqrstuvwxyz"
// connections with html file by id
// diractions - it will disappear when a key is pressed
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var userChoiceArray = document.getElementById("user-guesses");
var emotions = document.getElementById("emotions");
var button = "<button onclick=\"resetGame()\">Try again</button>";
var img_yes = document.getElementById("img_yes");
var img_no = document.getElementById("img_no");

function random_character() {
    return letters.substr(Math.floor(Math.random() * letters.length), 1);
}
var computerGuess = random_character();
// main function 
document.onkeyup = function (event) {
    // String.fromCharCode(event.keyCode).toLowerCase();
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    // console.log(guesses_now);

    if (letters.includes(userGuess) && gameInProgress === true) {        
        if (userGuess === computerGuess) {
            directionsText.textContent = "";
            wins++;
            winsText.textContent = "Wins: " + wins;
            // guessesLeft = 20;
            emotions.textContent = "Woohoo!! You got it!";
            gameInProgress = false;
            directionsText.innerHTML = button;
            userChoiceArray.textContent = "The cool letter was " + computerGuess.toUpperCase();
            document.getElementById("img_yes").style.display = "block";
        }

        else if (userGuess !== computerGuess) {
            directionsText.textContent = "";
            losses++;
            guesses_left--;
            lossesText.textContent = "Losses: " + losses;
            emotions.textContent = "Nope! Keep going!";
            guessesLeft.textContent = "Guesses Left: " + guesses_left;
            // needed to put pushing before the next line
            guesses_now.push(userGuess)
            userChoiceArray.textContent = "Your guesses so far: " + guesses_now;
            
            if (guesses_left <= 0) {                
                gameInProgress = false;
                directionsText.innerHTML = button;
                userChoiceArray.textContent = "The lucky letter was " + computerGuess.toUpperCase();
                emotions.textContent = "";
                document.getElementById("img_no").style.display = "block";
                


            }
        }
    }
}

function resetGame(){
    
  
    wins = 0;
    losses = 0;
    guesses_left = 20;
    guesses_now = [];
    gameInProgress = true;

    directionsText.textContent = "Press any letter to start playing with me!";
    winsText.textContent = "";
    userChoiceArray.textContent = "";
    emotions.textContent = "";
    lossesText.textContent = "";
    guessesLeft.textContent = "";

    computerGuess = random_character();
    document.getElementById("img_no").style.display = "none";
    document.getElementById("img_yes").style.display = "none";
}






