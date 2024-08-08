// Variables to store the results of each dice roll
var roll1 = null;
var roll2 = null;

// Function to roll the first dice
function rollFirstDice() {
    roll1 = Math.floor(Math.random() * 6) + 1;
    var randomdiceimage1 = "dice" + roll1 + ".png";
    var randomimagesource1 = "images/" + randomdiceimage1;
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomimagesource1);

    checkResult();
}

// Function to roll the second dice
function rollSecondDice() {
    roll2 = Math.floor(Math.random() * 6) + 1;
    var randomdiceimage2 = "dice" + roll2 + ".png";
    var randomimagesource2 = "images/" + randomdiceimage2;
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomimagesource2);

    checkResult();
}

// Function to check if both dice have been rolled and display the result
function checkResult() {
    if (roll1 !== null && roll2 !== null) {
        if (roll1 === roll2) {
            document.querySelector("h1").innerHTML = "Draw";
        } else if (roll1 > roll2) {
            document.querySelector("h1").innerHTML = "Player 1 wins!";
        } else {
            document.querySelector("h1").innerHTML = "Player 2 wins!";
        }

        // Reset the rolls for the next round
        roll1 = null;
        roll2 = null;
    }
}

// Add event listeners to each dice image
var diceImages = document.querySelectorAll("img");

diceImages[0].addEventListener("click", rollFirstDice);
diceImages[1].addEventListener("click", rollSecondDice);
