$(document).ready(function(){

	// Hide Audio Player
	//$('audio').hide();

	// Navigate Home on Click
	$('.backHome').click(function(){
     	$('audio').each(function() {
     		if(!this.paused){
        		this.pause();
     		}
    	});
	});

});// End Doc Ready