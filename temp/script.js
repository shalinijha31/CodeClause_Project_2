var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;


function myResult() {



	option_from = inputType.value;
	option_to = resultType.value;


	// now compare the input and resultType value and add formula

	//celsius

	if (option_from === "celsius" && option_to === "celsius") {
		result.value = Number(input.value);
	} else if (option_from === "celsius" && option_to === "kelvin") {
		result.value = Number(input.value)+273.15  ;
	} else if (option_from === "celsius" && option_to === "fahrenheit") {
		result.value = Number(input.value*(9/5)) + 32;
	} 




	//kelvin
	if (option_from === "kelvin" && option_to === "celsius") {
		result.value = Number(input.value)-273.15;
	} else if (option_from === "kelvin" && option_to === "kelvin") {
		result.value = Number(input.value);
	} else if (option_from === "kelvin" && option_to === "fahrenheit") {
		result.value = Number(input.value-273.15)*(9/5) + 32;
	} 





	//fahrenheit
	if (option_from === "fahrenheit" && option_to === "celsius") {
		result.value = Number((input.value)-32 )*(5/9);
	} else if (option_from === "fahrenheit" && option_to === "kelvin") {
		result.value = Number((input.value)-32)*(5/9) + 273.15 ;
	} else if (option_from === "fahrenheit" && option_to === "fahrenheit") {
		result.value = input.value;
	} 




}
