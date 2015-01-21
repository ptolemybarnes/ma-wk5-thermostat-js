// Thermostat starts at 20 degrees
// You can increase the temp with the up button
// You can decrease the temp with the down button
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 by hitting the reset button
// thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {thermostat = new Thermostat()});

  describe("starts", function() {

    it("that defaults to 20", function() {
      
      expect(thermostat.temperature).toBe(20);
    })
    
    it("with default minimum temperature of 10", function() {
      expect(thermostat.minTemp).toBe(10);
    });

    it("with default power saving mode off", function() {
      expect(thermostat.isPowerSavingOn).toBe(false)
    });
  });

  describe("temperature can", function() {
    
    it("be increased", function(){
      thermostat.increaseTempBy(5);

      expect(thermostat.temperature).toBe(25);
    });

    it('be decreased', function() {
      thermostat.decreaseTempBy(6);

      expect(thermostat.temperature).toBe(14);
    });

    it("be reset to 20", function() {
      thermostat.temperature = 30;

      thermostat.resetButton();

      expect(thermostat.temperature).toBe(20);
    });

    it('not go below 10', function() {
      expect( function(){ thermostat.decreaseTempBy(12); }).toThrowError("Temperature cannot go below 10.");
    });
  });

  describe("when power saving mode", function() {

    it("is off, max temperature is 32 degrees", function() {
      thermostat.isPowerSavingOn = false 

      expect(thermostat.maxTemp()).toBe(32);
    });

    it("is on, max temperature is 25 degrees", function() {
      thermostat.isPowerSavingOn = true

      expect(thermostat.maxTemp()).toBe(25);
    });
  });
});






