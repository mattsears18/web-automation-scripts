// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

setTimeout(function() {
	setInterval(function() {
		robot.moveMouseSmooth(1141, 593)
		robot.mouseClick()
		robot.moveMouseSmooth(1097, 635)
		robot.mouseClick()
	}, 100)
}, 5000)
