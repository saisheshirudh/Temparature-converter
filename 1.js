function convertTemperature() {
  var temperature = parseFloat(document.getElementById("inputTemp").value);
  var celsiusRadio = document.getElementById("celsiusRadio");
  var result = document.getElementById("result");

  if (celsiusRadio.checked) {
    var fahrenheit = (temperature * 9 / 5) + 32;
    result.innerHTML = temperature + "°C = " + fahrenheit + "°F";
  } else {
    var celsius = (temperature - 32) * 5 / 9;
    result.innerHTML = temperature + "°F = " + celsius + "°C";
  }
}
