/* Parrot minidrone!! */
var sec = 1000;
// Initialize the library
var Drone = require('parrot-minidrone');
var drone = new Drone({
	autoconnect: true,
});

// positive pitch is forward, negative is backward
// duration is how long you want the drone to do this for, in milliseconds
function pitch(amount, duration) {
	drone.setFlightParams({ pitch: amount });
	return new Promise(resolve => setTimeout(resolve, duration));
}
function roll(amount, duration) {
	drone.setFlightParams({ roll: amount });
	return new Promise(resolve => setTimeout(resolve, duration));
}
function yaw(amount, duration) {
	drone.setFlightParams({ yaw: amount });
	return new Promise(resolve => setTimeout(resolve, duration));
}
function altitude(amount, duration) {
	drone.setFlightParams({ altitude: amount });
	return new Promise(resolve => setTimeout(resolve, duration));
}
//add functions for roll (right/left), yaw (spin) and altitude here






// flipDirection options: flipFront, flipBack, flipRight, flipLeft
//pass in as a string ("with quotes"), the direction you want the drone to flip
function flip(flipDirection) {
	drone.animate(flipDirection);
	return new Promise((resolve) => setTimeout(resolve, 2500));
}


// Clear all flight params back to zero
function pause() {
	drone.setFlightParams({
		roll: 0,
		pitch: 0,
		yaw: 0,
		altitude: 0
	});
	return new Promise(resolve => setTimeout(resolve, 3500));
}


//YOUR FLIGHT PLAN
if (drone) {
	drone.on('connected', () => drone.takeOff());
	setTimeout(async () => {

		// Call your functions here!
		// pass in what the function is expecting, for frontBack this is pitch and duration
		await pitch(66, 3000);
		await pause();
		await yaw(66, 1000);
		await pause();
		await altitude(10, 1000);
		await pitch(45, 3000);
		await altitude(-11, 1100);
		await pitch(-45, 2000);
		await yaw(-45, 1000)
		await pause();
		await flip("flipFront")
		drone.land();
		process.exit();
	}, 6500);
}