


// Functions
// ********************************************************************************

$(document).ready(function () {

    var playerScore = 0;
    var computerNum = Math.floor(Math.random() * (120 - 19)) + 19;
    var yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    var redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    var purpleCrystal = Math.floor(Math.random() * (12 - 1)) + 1;

    function blinker() {
        $('.blinking').fadeOut(1000);
        $('.blinking').fadeIn(1000);
    }
    setInterval(blinker, 1000);

    function winner() {
        $("#playerNum").css("color", "green");
        $("#playerMessage").css("color", "green");
        $("#playerMessage").text("YOU WIN!!! CLICK HERE TO RESET");
        $(".myButton").prop('disabled', true);
        blinker();
    }

    function loser() {
        $("#playerNum").css("color", "red");
        $("#playerMessage").css("color", "red");
        $("#playerMessage").text("YOU LOSE!!! CLICK HERE TO RESET");
        $(".myButton").prop('disabled', true);
        blinker();
    }

    function reset() {
        computerNum = Math.floor(Math.random() * (120 - 19)) + 19;
        yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        purpleCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        playerScore = 0;
        $("#compNum").text(computerNum);
        $("#playerNum").text(playerScore);
        $("#playerMessage").text("");
        $("#playerNum").css("color", "black");
        $("#playerMessage").css("color", "red");
        $('.myButton').prop('disabled', false);

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
            winner();
        } else if (playerScore > computerNum) {
            loser();
        }
    });

    $("#greenButton").on("click", function () {
        playerScore = playerScore + greenCrystal;
        $("#playerNum").text(playerScore);

        if (playerScore == computerNum) {
            winner();
        } else if (playerScore > computerNum) {
            loser();
        }
    });

    $("#redButton").on("click", function () {
        playerScore = playerScore + redCrystal;
        $("#playerNum").text(playerScore);

        if (playerScore == computerNum) {
            winner();
        } else if (playerScore > computerNum) {
            loser();
        }
    });

    $("#purpleButton").on("click", function () {
        playerScore = playerScore + purpleCrystal;
        $("#playerNum").text(playerScore);

        if (playerScore == computerNum) {
            winner();
        } else if (playerScore > computerNum) {
            loser();
        }
    });

    $("#playerMessage").on("click", function () {
        if (playerScore != computerNum && playerScore < computerNum) {
            return;
        } else {
            reset();
        }
    });
});