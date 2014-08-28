function playAudio(id) {
var audioElement = document.getElementById(id);
var url = audioElement.getAttribute('src');
var my_media = new Media('/android_asset/www/' + url,
        // success callback
         function () { console.log("playAudio():Audio Success"); },
        // error callback
         function (err) { console.log("playAudio():Audio Error: " + err); }
);
       // Play audio
my_media.play();