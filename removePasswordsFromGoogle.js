// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

robot.setMouseDelay(100);

let clickInterval = setInterval(function() {
	let location = getLocation()
	console.log(location)

	if(location == 'manager') {
		robot.moveMouseSmooth(628, 446)
		robot.mouseClick()
	} else if(location == 'site') {
		let deleteCoords = getDeleteCoords()
		// console.log(deleteCoords);

		if(deleteCoords) {
			robot.moveMouseSmooth(deleteCoords[0], deleteCoords[1])
			robot.mouseClick()
			robot.keyTap('enter')
		} else {
			robot.moveMouseSmooth(428, 224)
			robot.mouseClick()
		}
	} else if(location == 'login') {
		robot.moveMouseSmooth(1008, 583)
		robot.mouseClick()
	} else {
		console.log('no location found, stop clicking')
		clearInterval(clickInterval)
	}
}, 4000)

function getLocation() {
	console.log('check if login required')
	robot.moveMouse(1008, 583)
	let color = robot.getPixelColor(1008, 583)

	if(color == '3e7ade') {
		console.log('login required')
		return 'login'
	}

	robot.moveMouse(724, 461)
	color = robot.getPixelColor(724, 461)

	if(color == "f5f5f5") {
		return 'manager'
	}

	if(color == 'ffffff') {
		return 'site'
	}

	console.log(color)

	return
}

function getDeleteCoords() {
	let coordSet = [
		[1110, 497],
		[1110, 530], //33
		[1110, 561], //31
		[1110, 593], //32
		[1110, 627], //34
		// [1110, 659], //32
		// [1110, 691], //32
	]

	for(i = 0; i < coordSet.length; i++) {
		let coords = coordSet[i]

		let color = getColor(coords)

		if(color == 'f7fafe') {
			console.log('has delete button at (' + coords[0] + ', ' + coords[1] + '), click it')
			return coords
		}
	}
}

function getColor(coords) {
	robot.moveMouseSmooth(coords[0], coords[1])
	return robot.getPixelColor(coords[0], coords[1])
}
