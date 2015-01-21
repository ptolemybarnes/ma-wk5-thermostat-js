var thermostat = new Thermostat();

$(document).on('click', function() {
  $("#tempreading").text(thermostat.temperature);
});

$(document).ready(function() {
  $("#tempreading").text(thermostat.temperature);

  $('#toptriangle').on('click', function() {
    thermostat.increaseTempBy(1);
  });

  $('#bottomtriangle').on('click', function() {
    thermostat.decreaseTempBy(1);
  });
});