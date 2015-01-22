var thermostat = new Thermostat();

$(document).on('click', function() {
  $("#temp-reading").text(thermostat.temperature);
  $("h1").attr("class",thermostat.usageIndicator());
  if (thermostat.usageIndicator()=='medium-usage') 
    color = "blue"
  else if (thermostat.usageIndicator()=='low-usage') 
    color = "green"
  else 
    color = "red"
  $("#power-saving-divider").css("background",color);
  // $("#right").css("background-color",color);
  // $("#power-saving-divider").attr("class",thermostat.usageIndicator());
});

$(document).ready(function() {
  $("#temp-reading").text(thermostat.temperature);

  $('#up-button').on('click', function() {
    thermostat.increaseTempBy(1);
  });

  $('#down-button').on('click', function() {
    thermostat.decreaseTempBy(1);
  });
});