// Get four buttons on screen, onclick the buttons will add associated value to player total score
// Assign a random value between 1-12 to each button every time the game is reset
// Create an input box for random gennerated “winning number” 19-120
// Generate “winning number”
// Create player score display and value
// Game reset when win or lose condition met

// Global Variables
// ********************************************************************************

var playerScore = 0;
var gameOn = true;

// Functions
// ********************************************************************************

$(document).ready(function () {

    var computerNum = Math.floor(Math.random() * (120 - 19)) + 19;
    var yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    var redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    var purpleCrystal = Math.floor(Math.random() * (12 - 1)) + 1;


    function reset() {
        computerNum = Math.floor(Math.random() * (120 - 19)) + 19;
        yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        purpleCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        playerScore = 0;
        $("#compNum").text(computerNum);
        $("#playerNum").text(playerScore);
        
        console.log("Winning Number is: " + computerNum);
        console.log("Yellow Crystal = " + yellowCrystal);
        console.log("Red Crystal = " + redCrystal);
        console.log("Green Crystal = " + greenCrystal);
        console.log("Purple Crystal = " + purpleCrystal);
        console.log("------------------------------------");

    }

    reset();
    


    $("#yellowButton").on("click", function () {
        playerScore = playerScore + yellowCrystal;
        $("#playerNum").text(playerScore);

        if (playerScore == computerNum) {
            $("#playerNum").css("color", "green");
            $("#playerMessage").text("YOU WIN!!! CLICK HERE TO RESET");
        } else if (playerScore > computerNum) {
            $("#playerNum").css("color", "red");
            $("#playerMessage").text("YOU LOSE!!!");
            reset();
        }
    });

    $("#greenButton").on("click", function () {
        playerScore = playerScore + greenCrystal;
        $("#playerNum").text(playerScore);

        if (playerScore == computerNum) {
            $("#playerNum").css("color", "green");
            $("#playerMessage").text("YOU WIN!!! CLICK HERE TO RESET");
        } else if (playerScore > computerNum) {
            $("#playerNum").css("color", "red");
            $("#playerMessage").text("YOU LOSE!!!");
            reset();

        }
    });

    $("#redButton").on("click", function () {
        playerScore = playerScore + redCrystal;
        $("#playerNum").text(playerScore);

        if (playerScore == computerNum) {
            $("#playerNum").css("color", "green");
            $("#playerMessage").text("YOU WIN!!! CLICK HERE TO RESET");
        } else if (playerScore > computerNum) {
            $("#playerNum").css("color", "red");
            $("#playerMessage").text("YOU LOSE!!!");
            reset();

        }
    });

    $("#purpleButton").on("click", function () {
        playerScore = playerScore + purpleCrystal;
        $("#playerNum").text(playerScore);

        if (playerScore == computerNum) {
            $("#playerNum").css("color", "green");
            $("#playerMessage").text("YOU WIN!!! CLICK HERE TO RESET");

        } else if (playerScore > computerNum) {
            $("#playerNum").css("color", "red");
            $("#playerMessage").text("YOU LOSE!!!");
            reset();

        }
    });
});