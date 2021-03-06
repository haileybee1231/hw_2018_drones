// Initialize the library
var Drone = require('parrot-minidrone');
var drone = new Drone({ autoconnect: true });

function changeAltitude(altitude, duration) {
	drone.setFlightParams({ altitude: altitude });
	console.log("changing altitude to " + altitude);
	return new Promise(resolve => setTimeout(resolve, duration));
}

function landAndDisconnectDrone() {
	drone.land();
	process.exit();
}

/* Task: build an array of distance values and make the drone do each one of them in a loop */

var altitudeArr = [25, -10, 15, -15, 25, -10, 20, 5, -10, 10];

if (drone) {
	drone.on('connected', () => {
		drone.takeOff();

		setTimeout(async () => {
			try {
				// TODO: Write a for loop here that goes through the altitude array
				// and calls changeAltitude with that value
				altitudeArr.forEach(item => {
					changeAltitude(item, 2000)
				})

				landAndDisconnect(drone);

			} catch (err) {
				console.log('Error occurred: ', err);
				landAndDisconnect(drone);
			}
		}, 6500);
	});
}