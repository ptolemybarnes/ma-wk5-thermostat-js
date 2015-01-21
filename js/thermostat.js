var Thermostat = function(defaultTemp) {
  this.temperature     = defaultTemp || Thermostat.defaultTemp
  this.minTemp         = 10;
  this.isPowerSavingOn = false;
};

Thermostat.defaultTemp = 20;

Thermostat.prototype.maxTemp    = function(){
  if (this.isPowerSavingOn) {
    return 25 }
  else {
    return 32 }
};

Thermostat.prototype.changeTempBy = function(amount) {
  var newTemperature = this.temperature + amount;
  this.regulateTemp(newTemperature);
  this.temperature = newTemperature;
};

Thermostat.prototype.increaseTempBy = function(amount) {
  this.changeTempBy(amount);
};

Thermostat.prototype.decreaseTempBy = function(amount) {
  this.changeTempBy(0 - amount);
};

Thermostat.prototype.regulateTemp = function(temp) {
  if (temp < this.minTemp) {
    throw Error('Temperature cannot go below ' + this.minTemp + '.');
  }
  else if (temp > this.maxTemp()) {
    throw Error('Temperature cannot go above ' + this.maxTemp() + '.');
  }
};

Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
};

Thermostat.prototype.usageIndicator = function() {
  if (this.temperature < 18) {
    return 'low-usage' }
  else if (this.temperature < 25) {
    return 'medium-usage';
  }
  else {
    return 'high-usage';
  }
};





