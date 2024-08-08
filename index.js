function rollDice() {
    var randomnumber1 = Math.floor(Math.random() * 6) + 1;
    var randomdiceimage1 = "dice" + randomnumber1 + ".png";
    var randomimagesource1 = "images/" + randomdiceimage1;
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomimagesource1);

    var randomnumber2 = Math.floor(Math.random() * 6) + 1;
    var randomdiceimage2 = "dice" + randomnumber2 + ".png";
    var randomimagesource2 = "images/" + randomdiceimage2;
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomimagesource2);

    if (randomnumber1 === randomnumber2) {
        document.querySelector("h1").innerHTML = "Draw";
    } else if (randomnumber1 > randomnumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
}

// Add event listeners to each dice image
var diceImages = document.querySelectorAll("img");

diceImages[0].addEventListener("click", function() {
    // Roll both dice when the first dice is clicked
    rollDice();
});

diceImages[1].addEventListener("click", function() {
    // Roll both dice when the second dice is clicked
    rollDice();
});


