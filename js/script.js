window.onload = function() {
  
  var thermostat = new Thermostat();

  document.getElementById("tempreading").innerHTML = thermostat.temperature;

  document.getElementById("toptriangle").addEventListener("click", function(){
    thermostat.increaseTempBy(1);

    document.getElementById("tempreading").innerHTML = thermostat.temperature;
  });

  document.getElementById("bottomtriangle").addEventListener("click", function(){
    thermostat.decreaseTempBy(1);
    
    document.getElementById("tempreading").innerHTML = thermostat.temperature;
  });
};
