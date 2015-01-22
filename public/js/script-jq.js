var thermostat = new Thermostat();

$(document).on('click', function() {
  $("#temp-reading").text(thermostat.temperature);
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