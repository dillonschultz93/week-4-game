$(document).ready(function() {

    // == GLOBAL VARIABLES ===========================================

    //Randomly generates a number for each gem
    var firstGemValue = Math.floor((Math.random() * 12) + 1);
    var secondGemValue = Math.floor((Math.random() * 12) + 1);
    var thirdGemValue = Math.floor((Math.random() * 12) + 1);
    var fourthGemValue = Math.floor((Math.random() * 12) + 1);

    //Randomly generates a number that the user must total up to
    var total = Math.floor((Math.random() * 120) + 19);

    //Score keeping
    var userGuess = 0;
    var wins = 0;
    var losses = 0;

    //On click events for each gem
    $("#gem-1").click(function(){
        totalUpdate(firstGemValue);
    });
    $("#gem-2").click(function(){
        totalUpdate(secondGemValue);
    });
    $("#gem-3").click(function(){
        totalUpdate(thirdGemValue);
    });
    $("#gem-4").click(function(){
        totalUpdate(fourthGemValue);
    });

    //Assigns the reset function to the reset button at the bottom of the page
    $("#reset").click(function(){
        reset();
    });

    // == FUNCTIONS & LOGIC ==========================================

    //Display the number the the user must total to
    $("#number-to-guess").text(total);

    //Display the user's current total
    $("#total").text(userGuess);

    //Function that totals up the user guesses
    function totalUpdate(gem) {
        userGuess += gem;
        //Display the user's current total
        $("#total").text(userGuess);

        //Checks a win or lose condition
        if(userGuess > total) {
            //Adds one to the loss score
            alert("Sorry, you lose");
            losses++;
            $("#losses").text(losses);
            reset();
            //Adds one to the wins score
        } else if(userGuess === total) {
            alert("Nice! You win!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
    }

    //Reset function that resets the userGuess to zero and reassigns new values to the gems
    function reset() {
        userGuess = 0;
        $("#total").text(userGuess);

        firstGemValue = Math.floor((Math.random() * 12) + 1);
        secondGemValue = Math.floor((Math.random() * 12) + 1);
        thirdGemValue = Math.floor((Math.random() * 12) + 1);
        fourthGemValue = Math.floor((Math.random() * 12) + 1);
        total = Math.floor((Math.random() * 100) + 12);
        $("#number-to-guess").text(total);
    }
});
