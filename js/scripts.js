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
	//myMedia = new Media("android_asset/www/sounds/turkey/TurkeyCackle.mp3");

	ion.sound({
	    sounds: [
	        {
	            name: "TurkeyCackle"
	        }
	    ],
	    volume: 1,
	    path: "android_asset/www/sounds/turkey/",
	    preload: true
	});

	function playAudio() {
		ion.sound.play("TurkeyCackle");
	}

});// End Doc Ready