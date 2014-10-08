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

	// Media Player
	myMedia = new Media("android_asset/www/sounds/turkey/TurkeyCackle.mp3");

	function playAudio() {
		myMedia.play();
	}

	function stopAudio() {
		myMedia.stop();
	}

});// End Doc Ready