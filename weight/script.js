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

	//Kilogram

	if (option_from === "Kilogram" && option_to === "Kilogram") {
		result.value = Number(input.value);
	} else if (option_from === "Kilogram" && option_to === "Gram") {
		result.value = Number(input.value) *1000;
	} else if (option_from === "Kilogram" && option_to === "Milligram") {
		result.value = (input.value)*1000000;
	} else if (option_from === "Kilogram" && option_to === "meTOn") {
		result.value = Number(input.value) ;
	} else if (option_from === "Kilogram" && option_to === "loTon") {
		result.value = Number(input.value) ;
	} else if (option_from === "Kilogram" && option_to === "Pound") {
		result.value = Number(input.value)*2.205 ;
	} 





	//Gram
	if (option_from === "Gram" && option_to === "Kilogram") {
		result.value = Number(input.value)/1000;
	} else if (option_from === "Gram" && option_to === "Gram") {
		result.value = Number(input.value);
	} else if (option_from === "Gram" && option_to === "Milligram") {
		result.value = (input.value)*1000;
	} else if (option_from === "Gram" && option_to === "meTOn") {
		result.value = Number(input.value) ;
	} else if (option_from === "Gram" && option_to === "loTon") {
		result.value = Number(input.value);
	} else if (option_from === "Gram" && option_to === "Pound") {
		result.value = Number(input.value) /453.6;
	} 



	//Milligram
	if (option_from === "Milligram" && option_to === "Kilogram") {
		result.value = Number(input.value)/1000000;
	} else if (option_from === "Milligram" && option_to === "Gram") {
		result.value = Number(input.value) /1000;
	} else if (option_from === "Milligram" && option_to === "Milligram") {
		result.value = input.value;
	} else if (option_from === "Milligram" && option_to === "meTOn") {
		result.value = Number(input.value) ;
	} else if (option_from === "Milligram" && option_to === "loTon") {
		result.value = Number(input.value) ;
	} else if (option_from === "Milligram" && option_to === "Pound") {
		result.value = Number(input.value) /453600;
	} 





	//Pound
	if (option_from === "Pound" && option_to === "Kilogram") {
		result.value = Number(input.value)/2.205;
	} else if (option_from === "Pound" && option_to === "Gram") {
		result.value = Number(input.value) * 453.6;
	} else if (option_from === "Pound" && option_to === "Milligram") {
		result.value = (input.value)*453600;
	} else if (option_from === "Pound" && option_to === "meTOn") {
		result.value = Number(input.value) * 1000;
	} else if (option_from === "Pound" && option_to === "loTon") {
		result.value = Number(input.value) * 1000000;
	} else if (option_from === "Pound" && option_to === "Pound") {
		result.value = Number(input.value) ;
	} 



}