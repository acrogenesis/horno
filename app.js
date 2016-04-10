var colLeds = $('#leds').children();
var leds = [];
$.map(colLeds, function(val, i){
  leds.push($($(val).children()[0]).children()[0]);
});
var count = 0;

function yellowfy(led){
  led = $(led);
  led.removeClass('led-green');
  led.addClass('led-yellow');
}

function greenify(led){
  led = $(led);
  led.removeClass('led-yellow');
  led.addClass('led-green');
}
myAudio = new Audio('alarm.mp3');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
function redify(led){
  var loader = new THREE.ImageLoader( manager );
  loader.load( 'eafred.png', function ( image ) {
    texture.image = image;
    texture.needsUpdate = true;
  } );
  led = $(led);
  led.removeClass('led-green');
  led.addClass('led-red');
  led.attr('title', 'Steel Panel 4');
  led.data('placement', 'bottom');
  led.data('content', 'Flow < 18m³/h');
  led.popover('show');
  myAudio.play();
}

function travel(){
  if (count > colLeds.length) {
    count = 0;
  }else {
    greenify(leds[count - 1]);
  }
  if (count == 29) {
    redify(leds[count]);
    clearInterval(travelInterval);
  }else {
    yellowfy(leds[count]);
  }
  var loader = new THREE.ImageLoader( manager );
  loader.load( 'eaf'+ (count % 8) +'.png', function ( image ) {
    texture.image = image;
    texture.needsUpdate = true;
  } );
  count = count + 1;
}

travel();
var travelInterval = setInterval(travel, 10000);
