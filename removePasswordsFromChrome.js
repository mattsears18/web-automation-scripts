// Move the mouse across the screen as a sine wave.
var robot = require('robotjs');

setInterval(function() {
  for (i = 0; i < 50; i++) {
    // setTimeout(function() {
    robot.moveMouse(1141, 593);
    robot.mouseClick();
    robot.moveMouse(1097, 635);
    robot.mouseClick();
    // }, 100);
  }
}, 5000);
