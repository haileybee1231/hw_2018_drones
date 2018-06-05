var Drone = require('parrot-minidrone');
var drone = new Drone({
	autoconnect: true,
});

if (drone) {
	drone.on('connected', () => {
		drone.land();
		process.exit();
	});
}