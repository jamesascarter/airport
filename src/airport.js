function Airport() {

this.planes = [];

};
function Plane() {};

Airport.prototype.land = function(plane) {
	this.planes.push(plane)
	return plane
};

Airport.prototype.takeOff = function(plane) {
	this.planes.splice(0,1)
	return plane
};