// variables for wins, losses, guesses left and so far now , and letters
var wins = 0;
var losses = 0;
var guesses_left = 10;
var guesses_now = [];
var gameInProgress = true;
var letters = "abcdefghijklmnopqrstuvwxyz";
// connections with html file by id
// directions - it will disappear when a key is pressed
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var userChoiceArray = document.getElementById("user-guesses");
var emotions = document.getElementById("emotions");
var img_yes = document.getElementById("img_yes");
var img_no = document.getElementById("img_no");
var oops = document.getElementById("oops");

// created an html button element
var button = "<button onclick=\"resetGame()\">Try again</button>";

// generated a random character - only one for the whole game
function random_character() {
    // another way - return letters.substr(Math.floor(Math.random() * letters.length), 1);
    return letters.charAt(Math.floor(Math.random() * letters.length));
}
var computerGuess = random_character();

// main function 
document.onkeyup = function (event) {
    // another way - works absolutely the same - String.fromCharCode(event.keyCode).toLowerCase();
    var userGuess = event.key.toLowerCase();

    // if an actual letter was pressed
    if (letters.includes(userGuess) && gameInProgress === true) {        
        // if user wins
        if (userGuess === computerGuess) {
            wins++;
            directionsText.textContent = "";
            winsText.textContent = "Wins: " + wins;
            emotions.textContent = "Woohoo!! You got it!";
            userChoiceArray.textContent = "The cool letter was " + computerGuess.toUpperCase();
            // game stops
            gameInProgress = false;
            // show a picture
            document.getElementById("img_yes").style.display = "block";
            // show a button with resets
            directionsText.innerHTML = button;
        }
        // if user keeps guessing
        else if (userGuess !== computerGuess) {
            // if the same letter pressed twice
            if (guesses_now.includes(userGuess)) {
                oops.textContent = "Oops.. You already played this letter!";
            // user keeps guessing until guesses left = 0
            } else {
                directionsText.textContent = "";
                losses++;
                guesses_left--;
                lossesText.textContent = "Losses: " + losses;
                emotions.textContent = "Nope! Keep going!";
                guessesLeft.textContent = "Guesses Left: " + guesses_left;
                oops.textContent = "";
                guesses_now.push(userGuess)
                userChoiceArray.textContent = "Your guesses so far: " + guesses_now.join(" ");
            }
            
            // if user looses
            if (guesses_left <= 0) {                
                gameInProgress = false;
                emotions.textContent = "";
                lossesText.textContent = "Not this time, budy..";
                // show the answer
                userChoiceArray.textContent = "The lucky letter was " + computerGuess.toUpperCase();
                // show a picture
                document.getElementById("img_no").style.display = "block";
                // show a button with resets
                directionsText.innerHTML = button;
                


            }
        }
    }
}

// reset function called by html button created above with onclick event
function resetGame(){
    
    // reset all variables
    wins = 0;
    losses = 0;
    guesses_left = 10;
    guesses_now = [];
    // start a new game
    gameInProgress = true;
    // show only instructions
    directionsText.textContent = "Press any letter to start playing with me!";
    winsText.textContent = "";
    userChoiceArray.textContent = "";
    emotions.textContent = "";
    lossesText.textContent = "";
    guessesLeft.textContent = "";
    // generate a new charcter
    computerGuess = random_character();
    // hide all pictures again
    document.getElementById("img_no").style.display = "none";
    document.getElementById("img_yes").style.display = "none";
}






