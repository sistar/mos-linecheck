load('api_config.js');
load('api_events.js');
load('api_gpio.js');
load('api_sys.js');
load('api_timer.js');

let sclPin = Cfg.get('demo.d1SCL');
let sdaPin = Cfg.get('demo.d2SDA');

print('scl GPIO:', sclPin, 'sda GPIO:', sdaPin);



GPIO.set_mode(sclPin, GPIO.MODE_OUTPUT);
GPIO.set_mode(sdaPin, GPIO.MODE_OUTPUT);

Timer.set(1000 /* 1 sec */, Timer.REPEAT, function() {
  let valueScl = GPIO.toggle(sclPin);
  print(valueScl);
  let value = GPIO.toggle(sdaPin);
  print(sdaPin);
}, null);
