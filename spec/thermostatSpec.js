// thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {thermostat = new Thermostat()});

  it("has default temperature of 20",function() {
    expect(Thermostat.defaultTemp).toEqual(20);
  });

  describe("starts", function() {

    it("with default temp of 20", function() {
      thermostat = new Thermostat();

      expect(thermostat.temperature).toEqual(20);
    });

    it("with default temp passed to it", function() {
      thermostat = new Thermostat(18);

      expect(thermostat.temperature).toEqual(18);
    });
    
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
  });

  describe("when user tries to increase/decrease temperature out of bounds", function() {

    it('raises error if hits min temperature', function() {
      expect( function(){ thermostat.decreaseTempBy(12) }).toThrowError("Temperature cannot go below 10.");
    });

    it('raises error if hits max temperature', function() {
      expect( function(){ thermostat.increaseTempBy(50) }).toThrowError("Temperature cannot go above 32.");
    });
  });

  describe("when power saving mode", function() {

    it("is off, max temperature is 32 degrees", function() {
      thermostat.isPowerSavingOn = false 

      expect(thermostat.maxTemp()).toBe(32);
    });

    it("is on, max temperature is 25 degrees", function() {
      thermostat.isPowerSavingOn = true

      expect(thermostat.maxTemp()).toEqual(25);
    });
  });

  describe("gives indicator", function() {

    it("of'low-usage' when temp is below 18.", function() {
      thermostat.temperature = 15;

      expect(thermostat.usageIndicator()).toEqual('low-usage');
    });
    it("of 'medium-usage' when temp is between 18 and 25", function() {
      thermostat.temperature = 20;

      expect(thermostat.usageIndicator()).toEqual('medium-usage');
    });
    it("of 'high-usage' when temp is above 24", function() {
      thermostat.temperature = 26;

      expect(thermostat.usageIndicator()).toEqual('high-usage');
    });
  });
});






