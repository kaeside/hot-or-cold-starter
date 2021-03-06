$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    //GRABBING DATA ENTERED
    var guessedAnswer = calculateAnswer();

    function calculateAnswer() {
        return Math.floor(integerRange(0, 100));
        //console.log(guessedAnswer);
    }

    // GENERATION OF RANDOM NUMBERS
    //Math.Random() * value rounds numbers to 1 less than the value, adding 1 rounds it to the value
    var randomNumber = (Math.random() * 100) + 1;

    //Math.Floor rounds randomnumber down to the nearest integer
    var randomInteger = Math.floor(randomNumber);

    //SUBMISSION OF GUESSES
    var countGuesses = 0;
    $('.hotOrCold').submit(function(event) {
        event.preventDefault();
        countGuesses++;
        var something = $('#userGuess').val();
        $('.guessBox').append("<li>" + something + "</li>");
        $("#count").text(countGuesses);
        $("#userGuess").val('');

        //PROMPTS FOR GUESSES

        //Math.abs returns the absolute value of a number
        var guessedRange = Math.abs(something - guessedAnswer);
        //console.log(distance);

        //These statements run pending on how close or far away the guessedAnswer is from the value

        if (guessedRange >= 50) {
            $('#feedback').text('Ice Cold!');
        } else if (guessedRange >= 40) {
            $('#feedback').text('Cold,brrr!');
        } else if (guessedRange >= 30) {
            $('#feedback').text('Warmish');
        } else if (guessedRange >= 20) {
            $('#feedback').text('Warm');
        } else if (guessedRange >= 10) {
            $('#feedback').text('Very Warm');
        } else if (guessedRange > 1) {
            $('#feedback').text('Hot');
        } else if (guessedRange === 0) {
            $('#feedback').text('You got the answer');
        }

    });

    function integerRange(min, max) {
        //Use Math.floor to round to nearest integer
        return min + Math.floor((Math.random() * (max - min)));
    }

    // GENERATION OF NEW PAGE
    $(".new").on("click", function() {
        $("#count").text("0");
        $("#guessList").empty();
        countGuesses = 0;
    });

});
