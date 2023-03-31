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

	//sqMeter

	if (option_from === "sqMeter" && option_to === "sqMeter") {
		result.value = Number(input.value);
	} else if (option_from === "sqMeter" && option_to === "sqKilometer") {
		result.value = Number(input.value) /1000000;
	} else if (option_from === "sqMeter" && option_to === "sqCentimeter") {
		result.value = input.value;
	} else if (option_from === "sqMeter" && option_to === "sqMicrometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "sqMeter" && option_to === "sqMile") {
		result.value = Number(input.value) ;
	} else if (option_from === "sqMeter" && option_to === "sqYard") {
		result.value = Number(input.value) * 1.196;
	} else if (option_from === "sqMeter" && option_to === "sqFoot") {
		result.value = Number(input.value) *10.764;
	} else if (option_from === "sqMeter" && option_to === "sqInch") {
		result.value = Number(input.value) * 1550;
	} else if (option_from === "sqMeter" && option_to === "sqAcre") {
		result.value = Number(input.value) /4047;
	} 



	//sqKilometer
	if (option_from === "sqKilometer" && option_to === "sqMeter") {
		result.value = Number(input.value)*1000000;
	} else if (option_from === "sqKilometer" && option_to === "sqKilometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "sqKilometer" && option_to === "sqCentimeter") {
		result.value = input.value;
	} else if (option_from === "sqKilometer" && option_to === "sqMicrometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "sqKilometer" && option_to === "sqMile") {
		result.value = Number(input.value) /2.59;
	} else if (option_from === "sqKilometer" && option_to === "sqYard") {
		result.value = Number(input.value) ;
	} else if (option_from === "sqKilometer" && option_to === "sqFoot") {
		result.value = Number(input.value) ;
	} else if (option_from === "sqKilometer" && option_to === "sqInch") {
		result.value = Number(input.value) ;
	} else if (option_from === "sqKilometer" && option_to === "sqAcre") {
		result.value = Number(input.value) ;
	} 





	//sqCentimeter
	if (option_from === "sqKilometer" && option_to === "sqMeter") {
		result.value = Number(input.value)/1000;
	} else if (option_from === "sqKilometer" && option_to === "sqKilometer") {
		result.value = Number(input.value) * 100;
	} else if (option_from === "sqKilometer" && option_to === "sqCentimeter") {
		result.value = input.value;
	} else if (option_from === "sqKilometer" && option_to === "sqMicrometer") {
		result.value = Number(input.value) * 1000;
	} else if (option_from === "sqKilometer" && option_to === "sqMile") {
		result.value = Number(input.value) * 1000000;
	} else if (option_from === "sqKilometer" && option_to === "sqYard") {
		result.value = Number(input.value) * 1000000000;
	} else if (option_from === "sqKilometer" && option_to === "sqFoot") {
		result.value = Number(input.value) / 1609;
	} else if (option_from === "sqKilometer" && option_to === "sqInch") {
		result.value = Number(input.value) * 1.09361;
	} else if (option_from === "sqKilometer" && option_to === "sqAcre") {
		result.value = Number(input.value) * 3.28084;
	} 





	//sqMicrometer
	if (option_from === "sqMicrometer" && option_to === "sqMeter") {
		result.value = Number(input.value)/1000;
	} else if (option_from === "sqMicrometer" && option_to === "sqKilometer") {
		result.value = Number(input.value) * 100;
	} else if (option_from === "sqMicrometer" && option_to === "sqCentimeter") {
		result.value = input.value;
	} else if (option_from === "sqMicrometer" && option_to === "sqMicrometer") {
		result.value = Number(input.value) * 1000;
	} else if (option_from === "sqMicrometer" && option_to === "sqMile") {
		result.value = Number(input.value) * 1000000;
	} else if (option_from === "sqMicrometer" && option_to === "sqYard") {
		result.value = Number(input.value) * 1000000000;
	} else if (option_from === "sqMicrometer" && option_to === "sqFoot") {
		result.value = Number(input.value) / 1609;
	} else if (option_from === "sqMicrometer" && option_to === "sqInch") {
		result.value = Number(input.value) * 1.09361;
	} else if (option_from === "sqMicrometer" && option_to === "sqAcre") {
		result.value = Number(input.value) * 3.28084;
	} 




	//Hectare
	if (option_from === "Hectare" && option_to === "sqMeter") {
		result.value = Number(input.value)/1000;
	} else if (option_from === "Hectare" && option_to === "sqKilometer") {
		result.value = Number(input.value) * 100;
	} else if (option_from === "Hectare" && option_to === "sqCentimeter") {
		result.value = input.value;
	} else if (option_from === "Hectare" && option_to === "sqMicrometer") {
		result.value = Number(input.value) * 1000;
	} else if (option_from === "Hectare" && option_to === "sqMile") {
		result.value = Number(input.value) * 1000000;
	} else if (option_from === "Hectare" && option_to === "sqYard") {
		result.value = Number(input.value) * 1000000000;
	} else if (option_from === "Hectare" && option_to === "sqFoot") {
		result.value = Number(input.value) / 1609;
	} else if (option_from === "Hectare" && option_to === "sqInch") {
		result.value = Number(input.value) * 1.09361;
	} else if (option_from === "Hectare" && option_to === "sqAcre") {
		result.value = Number(input.value) * 3.28084;
	} 



}
