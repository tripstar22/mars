$(document).ready(function() {
  
	$('#start-button').click(function(){
		console.log("animating!!!!!!!!!!!!")
	   $('body').toggleClass('animating');
	   return false;
	});	

	$("body").bind('transitionEnd, webkitTransitionEnd', function() { 
		//console.log("body transition ended ===============")
	});

	$("#bike").bind('webkitTransitionEnd', function() { 
		console.log("transition ended ===============")
		$('body').addClass('dropit');
	});

});

