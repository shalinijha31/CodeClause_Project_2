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

	//cuMeter

	if (option_from === "cuMeter" && option_to === "cuMeter") {
		result.value = Number(input.value);
	} else if (option_from === "cuMeter" && option_to === "cuKilometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "cuMeter" && option_to === "cuCentimeter") {
		result.value = input.value;
	} else if (option_from === "cuMeter" && option_to === "cuMillimeter") {
		result.value = Number(input.value) ;
	} else if (option_from === "cuMeter" && option_to === "Liter") {
		result.value = Number(input.value)*1000 ;
	} 



	//cuKilometer
	if (option_from === "cuKilometer" && option_to === "cuMeter") {
		result.value = Number(input.value);
	} else if (option_from === "cuKilometer" && option_to === "cuKilometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "cuKilometer" && option_to === "cuCentimeter") {
		result.value = input.value;
	} else if (option_from === "cuKilometer" && option_to === "cuMillimeter") {
		result.value = Number(input.value) ;
	} else if (option_from === "cuKilometer" && option_to === "Liter") {
		result.value = Number(input.value) ;
	} 





	//cuMillimeter
	if (option_from === "cuMillimeter" && option_to === "cuMeter") {
		result.value = Number(input.value);
	} else if (option_from === "cuMillimeter" && option_to === "cuKilometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "cuMillimeter" && option_to === "cuCentimeter") {
		result.value = input.value;
	} else if (option_from === "cuMillimeter" && option_to === "cuMillimeter") {
		result.value = Number(input.value) ;
	} else if (option_from === "cuMillimeter" && option_to === "Liter") {
		result.value = Number(input.value) ;
	} 



}