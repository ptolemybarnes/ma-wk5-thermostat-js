window.onload = function() {
  
  var thermostat = new Thermostat();

  document.getElementById("temp-reading").innerHTML = thermostat.temperature;

  document.getElementById("up-button").addEventListener("click", function(){
    thermostat.increaseTempBy(1);

    document.getElementById("temp-reading").innerHTML = thermostat.temperature;
  });

  document.getElementById("down-button").addEventListener("click", function(){
    thermostat.decreaseTempBy(1);
    
    document.getElementById("temp-reading").innerHTML = thermostat.temperature;
  });
};
