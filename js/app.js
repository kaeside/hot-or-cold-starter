
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    var countGuesses = 0;
  $('.hotOrCold').submit(function(event) {
    event.preventDefault();
    countGuesses++;
    var something = $('#userGuess').val();
    $('.guessBox').append("<li>" + something + "</li>");
    $("#count").text(countGuesses);
    $("#userGuess").val('');
  });
$(".new").on("click", function() {
  $("#count").text("0");
  $("#guessList").empty();
  countGuesses = 0;
});

});