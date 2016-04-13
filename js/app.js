
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  $('.hotOrCold').submit(function(event) {
    event.preventDefault();
    alert ('hello');
  });

  var something = $('#userGuess').val();

  $('.text .guessBox').append("<li>" + something + "</li>");

});