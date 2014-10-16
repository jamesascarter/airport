describe("The airport", function(){

	beforeEach(function(){
		airport = new Airport;
		plane = new Plane;
	});

	it("should allow a plane to land", function(){
		expect(airport.land(plane)).toEqual(plane);
	});

	it('should be able to hold a number of planes', function(){
		expect(airport.planes).toEqual([])
	});

	it("should allow planes to take-off", function(){
		airport.land(plane)
		expect(airport.takeOff(plane)).toEqual(plane)
	});

});