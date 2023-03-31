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

	//Second

	if (option_from === "Second" && option_to === "Second") {
		result.value = Number(input.value);
	} else if (option_from === "Second" && option_to === "Minute") {
		result.value = Number(input.value) / 60;
	} else if (option_from === "Second" && option_to === "Hour") {
		result.value = (input.value)/3600;
	} else if (option_from === "Second" && option_to === "Day") {
		result.value = Number(input.value) /86400;
	} else if (option_from === "Second" && option_to === "Week") {
		result.value = Number(input.value) /604800;
	} else if (option_from === "Second" && option_to === "Month") {
		result.value = Number(input.value) /2628000;
	} else if (option_from === "Second" && option_to === "Year") {
		result.value = Number(input.value) / 31540000;
	} 




	//Minute
	if (option_from === "Minute" && option_to === "Second") {
		result.value = Number(input.value)*60;
	} else if (option_from === "Minute" && option_to === "Minute") {
		result.value = Number(input.value) ;
	} else if (option_from === "Minute" && option_to === "Hour") {
		result.value = (input.value)/60;
	} else if (option_from === "Minute" && option_to === "Day") {
		result.value = Number(input.value) /1440;
	} else if (option_from === "Minute" && option_to === "Week") {
		result.value = Number(input.value) /10080;
	} else if (option_from === "Minute" && option_to === "Month") {
		result.value = Number(input.value) /43800;
	} else if (option_from === "Minute" && option_to === "Year") {
		result.value = Number(input.value) /525600;
	} 




	//Hour
	if (option_from === "Hour" && option_to === "Second") {
		result.value = Number(input.value)*3600;
	} else if (option_from === "Hour" && option_to === "Minute") {
		result.value = Number(input.value) * 60;
	} else if (option_from === "Hour" && option_to === "Hour") {
		result.value = input.value;
	} else if (option_from === "Hour" && option_to === "Day") {
		result.value = Number(input.value) /24;
	} else if (option_from === "Hour" && option_to === "Week") {
		result.value = Number(input.value) /168;
	} else if (option_from === "Hour" && option_to === "Month") {
		result.value = Number(input.value) /720;
	} else if (option_from === "Hour" && option_to === "Year") {
		result.value = Number(input.value) / 8760;
	} 




}
