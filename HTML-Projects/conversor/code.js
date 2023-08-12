function ConvertDolar() {
    var valueElement = document.getElementById("valueDolar");
    var value = valueElement.value;
    var valueInReal = parseFloat(value);
  
    var valueInDolar = valueInReal / 5.16;
    valueInDolar = Math.ceil(valueInDolar);
  
    var elementValueConverted = document.getElementById("convertedValueDolar");
    var valueConverted = "The result in dolar is: " + valueInDolar + " U$";
    elementValueConverted.innerHTML = valueConverted;
  }
  
  function ConvertEuro() {
    var valueElement = document.getElementById("valueEuro");
    var value = valueElement.value;
    var valueEmReal = parseFloat(value);
  
    var valueEmDolar = valueEmReal /5.63;
  
    var elementValueConverted = document.getElementById("convertedValueEuro");
    var valueConverted = "The result in euro is: " + valueEmDolar + " €";
    elementValueConverted.innerHTML = valueConverted;
  }
  
  function ConvertBitcoin() {
    var valueElement = document.getElementById("valueBitcoin");
    var value = valueElement.value;
    var valueEmReal = parseFloat(value);
  
    var valueEmDolar = valueEmReal * 0.0000072;
  
    var elementValueConverted = document.getElementById("convertedValueBitcoin");
    var valueConverted = "The result in bitcoin is: " + valueEmDolar + " BTC";
    elementValueConverted.innerHTML = valueConverted;
  }
  
  function ConvertFarenheint() {
    var valueElement = document.getElementById("tempFarenheint");
    var value = valueElement.value;
    var valueInReal = parseFloat(value);
  
    var valueInDolar = (valueInReal * 1.8) + 32;
  
    var elementValueConverted = document.getElementById("convertedDegreeFarenheint");
    var valueConverted = "The result in Farenheint is: " + valueInDolar + " °F";
    elementValueConverted.innerHTML = valueConverted;
  }
  
  function ConvertKelvin() {
    var valueElement = document.getElementById("tempKelvin");
    var value = valueElement.value;
    var valueInReal = parseFloat(value);
  
    var valueInDolar = valueInReal + 273.15;
  
    var elementValueConverted = document.getElementById("convertedDegreeKelvin");
    var valueConverted = "The result in Kelvin is: " + valueInDolar + " °K";
    elementValueConverted.innerHTML = valueConverted;
  }
