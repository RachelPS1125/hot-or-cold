
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	function newGame(){
		var randomNum = Math.floor((Math.random() *100)+1);
		console.log(randomNum);
		var lastGuess = null;
		var guessNum = 0
		function compareGuesses(random, currentGuess, previousGuess){
			if((Math.abs(random - previousGuess)) > (Math.abs(random - currentGuess))){
				$('#feedback').html('Warmer!');
			}
			else if((Math.abs(random - previousGuess)) === (Math.abs(random - currentGuess))){
				$('#feedback').html('Same Temp');
			}
			else{
				$('#feedback').html('Colder');
			}; 				
		};

		$('#guessButton').click(function(){
			var userGuess = parseInt($('#userGuess').val());
			console.log(userGuess);
			guessNum+=1;
			$('#count').html(guessNum);
			if(userGuess === randomNum){
				$('#feedback').html('You got the right number in ' + guessNum + ' guesses!!! Congratulations!! Click the \"New Game\" button to start a new game');
			}
			else if(lastGuess===null){
				if(Math.abs(randomNum-userGuess)>=90){
					$('#feedback').html('Extremely Cold');
				}
				else if(90>Math.abs(randomNum-userGuess)&Math.abs(randomNum-userGuess)>=70){
					$('#feedback').html('Very Cold');
				}
				else if(70>Math.abs(randomNum-userGuess)&Math.abs(randomNum-userGuess)>=50){
					$('#feedback').html('Pretty Cold');
				}
				else if(50>Math.abs(randomNum-userGuess)&Math.abs(randomNum-userGuess)>=30){
					$('#feedback').html('Cold');
				}
				else if(30>Math.abs(randomNum-userGuess)&Math.abs(randomNum-userGuess)>=20){
					$('#feedback').html('Cool');
				}
				else if(20>Math.abs(randomNum-userGuess)&Math.abs(randomNum-userGuess)>=10){
					$('#feedback').html('Warm');
				}
				else if(10>Math.abs(randomNum-userGuess)&Math.abs(randomNum-userGuess)>=5){
					$('#feedback').html('Very Warm');
				}else{
					$('#feedback').html('Hot!!!');
					console.log('Hot');
				}
			}else{
				compareGuesses(randomNum, userGuess, lastGuess);
			};
			$('#guessList').prepend('<li class="guesses">'+userGuess+'</li>')
			lastGuess = userGuess;
		});	 
	};
	newGame();
	$('.new').click(function(){
		newGame();
		$('#feedback').html('Make your Guess!');
		$('#guessList').empty();
		$('#userGuess').val('');

	})
});


