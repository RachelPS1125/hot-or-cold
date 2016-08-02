$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);

	});
	var randomNum, lastGuess, guessNum;
	function compareWithLastGuess(random, previousGuess, distance){
		if((Math.abs(random - previousGuess)) > distance){
			setFeedback('Warmer!');
		}
		else if((Math.abs(random - previousGuess)) === distance){
			setFeedback('Same Temp');
		}
		else{
			setFeedback('Colder');
		}; 				
	}
	function setFeedback(feedback){
		$('#feedback').html(feedback);
	}
	function compareGuess(userGuess,lastGuess, randomNum){
		var distance = Math.abs(randomNum-userGuess);
		if(userGuess === randomNum){
			setFeedback('You got the right number in ' + guessNum + ' guesses!!! Congratulations!! Click the \"New Game\" button to start a new game');
		}
		else if(lastGuess===null){
			if(Math.abs(randomNum-userGuess)>=90){
				setFeedback('Extremely Cold');
			}
			else if(90>distance && distance>=70){
				setFeedback('Very Cold');
			}
			else if(70>distance && distance>=50){
				setFeedback('Pretty Cold');
			}
			else if(50>distance && distance>=30){
				setFeedback('Cold');
			}
			else if(30>distance && distance>=20){
				setFeedback('Cool');
			}
			else if(20>distance && distance>=10){
				setFeedback('Warm');
			}
			else if(10>distance && distance>=5){
				setFeedback('Very Warm');
			}else{
				setFeedback('Hot!!!');
			}
		}else{
			compareWithLastGuess(randomNum, lastGuess, distance);
		};
	}
	function newGame(){
		setFeedback('Make your Guess!');
		$('#guessList').empty();
		$('#userGuess').val('');
		randomNum = Math.floor((Math.random() *100)+1);
		lastGuess = null;
		guessNum = 0
		$('#count').html(guessNum);	 
	};
	newGame();
	$('.new').click(function(){
		newGame();
	});
	$('.guessForm').submit(function(event){
		event.preventDefault();
		var userGuess = parseInt($('#userGuess').val());
		guessNum+=1;
		$('#count').html(guessNum);
		compareGuess(userGuess, lastGuess, randomNum);
		$('#guessList').prepend('<li class="guesses">'+userGuess+'</li>');
		lastGuess = userGuess;
		$('#userGuess').val('');
	});
});


