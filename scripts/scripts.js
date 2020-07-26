$(document).ready(function () {

	var firstValue;
	var secondValue;
	var operation;

	function calculate(param){
  	switch (param){
	    case 'plus':
	    	var result = firstValue+secondValue;
	    	$('.results').html(result);
	      break;
	    case 'minus':
	    	var result = firstValue-secondValue;
	    	$('.results').html(result);
	      break;
	    default:
	      alert('Please enter a valid funcion');
	  }
	}

	$('.number').on('click',function(){
		var value = $(this).html();
		$('.results').html(value);
	});

	$('.functions').on('click',function(){
		operation = $(this).data("value");
		firstValue = parseInt($('.results').html());
		$('.results').html('');
	});

	$('.equal').on('click',function(){
		secondValue = parseInt($('.results').html());
		$('.results').html('');
		calculate(operation);
	});

});