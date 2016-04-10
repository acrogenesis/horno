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

function travel(){
  if (count > colLeds.length) {
    count = 0;
  }else {
    greenify(leds[count - 1]);
  }
  yellowfy(leds[count]);
  // timeout
  count = count + 1;
}

setInterval(travel, 3000);
