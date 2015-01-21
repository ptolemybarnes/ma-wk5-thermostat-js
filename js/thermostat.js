var Thermostat = function() {};

Thermostat.prototype.temperature     = 20;

Thermostat.prototype.minTemp      = 10;

Thermostat.prototype.maxTemp    = function(){
  if (this.isPowerSavingOn) {
         return 25;
  }
  return 32;
};

Thermostat.prototype.isPowerSavingOn   = false;

Thermostat.prototype.increaseTempBy = function(amount) {
  var newTemperature = this.temperature + amount;
  this.regulateTemp(newTemperature);
  this.temperature = newTemperature;
};

Thermostat.prototype.decreaseTempBy = function(amount) {
  var newTemperature = this.temperature - amount;
  this.regulateTemp(newTemperature);
  this.temperature = newTemperature;
};

Thermostat.prototype.regulateTemp = function(temp) {
  if (temp < this.minTemp) {
    throw Error('Temperature cannot go below ' + this.minTemp + '.');
  }
  else if (temp > this.maxTemp) {
    throw Error('Temperature cannot go above ' + this.maxTemp + '.');
  }
};

Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
};








