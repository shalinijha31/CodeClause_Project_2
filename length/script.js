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

	//meter

	if (option_from === "meter" && option_to === "kilometer") {
		result.value = Number(input.value)/1000;
	} else if (option_from === "meter" && option_to === "Centimeter") {
		result.value = Number(input.value) * 100;
	} else if (option_from === "meter" && option_to === "meter") {
		result.value = input.value;
	} else if (option_from === "meter" && option_to === "Millimeter") {
		result.value = Number(input.value) * 1000;
	} else if (option_from === "meter" && option_to === "Micrometer") {
		result.value = Number(input.value) * 1000000;
	} else if (option_from === "meter" && option_to === "Nanometer") {
		result.value = Number(input.value) * 1000000000;
	} else if (option_from === "meter" && option_to === "Mile") {
		result.value = Number(input.value) / 1609;
	} else if (option_from === "meter" && option_to === "Yard") {
		result.value = Number(input.value) * 1.09361;
	} else if (option_from === "meter" && option_to === "Foot") {
		result.value = Number(input.value) * 3.28084;
	} else if (option_from === "meter" && option_to === "Inch") {
		result.value = Number(input.value) * 39.37;
	} else if (option_from === "meter" && option_to === "Light") {
		result.value = Number(input.value) / 1852;
	}


	//kelometer
	if (option_from === "kilometer" && option_to === "meter") {
		result.value = Number(input.value) * 1000;
	} else if (option_from === "kilometer" && option_to === "Centimeter") {
		result.value = Number(input.value) * 100000;
	} else if (option_from === "kilometer" && option_to === "kilometer") {
		result.value = input.value
	} else if (option_from === "kilometer" && option_to === "Millimeter") {
		result.value = Number(input.value) * 1000000;
	} else if (option_from === "kilometer" && option_to === "Micrometer") {
		result.value = (input.value) * 1000000000;
	} else if (option_from === "kilometer" && option_to === "Nanometer") {
		result.value = Number(input.value) * 1000000000000;
	} else if (option_from === "kilometer" && option_to === "Mile") {
		result.value = (input.value) / 1.609;
	} else if (option_from === "kilometer" && option_to === "Yard") {
		result.value = Number(input.value) * 1094;
	} else if (option_from === "kilometer" && option_to === "Foot") {
		result.value = (input.value) * 3281;
	} else if (option_from === "kilometer" && option_to === "Inch") {
		result.value = Number(input.value) * 39370;
	} else if (option_from === "kilometer" && option_to === "Nautical") {
		result.value = (input.value) / 1.852;
	}





	//centimeter
	if (option_from === "Centimeter" && option_to === "Meter") {
		result.value = Number(input.value) / 100;
	} else if (option_from === "Centimeter" && option_to === "Kilometer") {
		result.value = Number(input.value) / 100000;
	} else if (option_from === "Centimeter" && option_to === "Centimeter") {
		result.value = (input.value) ;
	} else if (option_from === "Centimeter" && option_to === "Millimeter") {
		result.value = Number(input.value) * 10;
	} else if (option_from === "Centimeter" && option_to === "Micrometer") {
		result.value = Number(input.value) * 10000;
	} else if (option_from === "Centimeter" && option_to === "Nanometer") {
		result.value = (input.value) * 10000000;
	} else if (option_from === "Centimeter" && option_to === "Mile") {
		result.value = Number(input.value) / 160900;
	} else if (option_from === "Centimeter" && option_to === "Yard") {
		result.value = (input.value) / 91.44;
	} else if (option_from === "Centimeter" && option_to === "Foot") {
		result.value = Number(input.value) / 30.48;
	} else if (option_from === "Centimeter" && option_to === "Inch") {
		result.value = (input.value) / 2.54;
	} else if (option_from === "Centimeter" && option_to === "Nautical") {
		result.value = (input.value) / 185200
	}





	//Millimeter
	if (option_from === "Millimeter" && option_to === "Meter") {
		result.value = Number(input.value) / 1000;
	} else if (option_from === "Millimeter" && option_to === "Kilometer") {
		result.value = Number(input.value) / 1000000;
	} else if (option_from === "Millimeter" && option_to === "Centimeter") {
		result.value = Number(input.value) /10;
	} else if (option_from === "Millimeter" && option_to === "Millimeter") {
		result.value = Number(input.value) ;
	} else if (option_from === "Millimeter" && option_to === "Micrometer") {
		result.value = Number(input.value) * 10000;
	} else if (option_from === "Millimeter" && option_to === "Nanometer") {
		result.value = Number(input.value) * 10000000;
	} else if (option_from === "Millimeter" && option_to === "Mile") {
		result.value = Number(input.value) /160900;
	} else if (option_from === "Millimeter" && option_to === "Yard") {
		result.value = Number(input.value) /914.4;
	} else if (option_from === "Millimeter" && option_to === "Foot") {
		result.value = Number(input.value) /304.8;
	} else if (option_from === "Millimeter" && option_to === "Inch") {
		result.value = Number(input.value) /25.4;
	} else if (option_from === "Millimeter" && option_to === "Nautical") {
		result.value = Number(input.value) /1852000;
	}




	//Micrometer
	if (option_from === "Micrometer" && option_to === "Meter") {
		result.value = Number(input.value) /1000000;
	} else if (option_from === "Micrometer" && option_to === "Kilicrometer") {
		result.value = Number(input.value) /1000000000;
	} else if (option_from === "Micrometer" && option_to === "Centimeter") {
		result.value = Number(input.value) /10000;
	} else if (option_from === "Micrometer" && option_to === "Millimeter") {
		result.value = Number(input.value) /1000;
	} else if (option_from === "Micrometer" && option_to === "Micrometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "Micrometer" && option_to === "Nanometer") {
		result.value = Number(input.value) * 1000;
	} else if (option_from === "Micrometer" && option_to === "Mile") {
		result.value = Number(input.value) ;
	} else if (option_from === "Micrometer" && option_to === "Yard") {
		result.value = Number(input.value) /914400;
	} else if (option_from === "Micrometer" && option_to === "Foot") {
		result.value = Number(input.value) /304800;
	} else if (option_from === "Micrometer" && option_to === "Inch") {
		result.value = Number(input.value) /25400;
	} else if (option_from === "Micrometer" && option_to === "Nautical") {
		result.value = Number(input.value) ;
	}




	//Nanometer
	if (option_from === "Nanometer" && option_to === "Meter") {
		result.value = Number(input.value) /1000000000;
	} else if (option_from === "Nanometer" && option_to === "Kilometer") {
		result.value = Number(input.value) /1000000000000;
	} else if (option_from === "Nanometer" && option_to === "Centimeter") {
		result.value = Number(input.value) / 10000000;
	} else if (option_from === "Nanometer" && option_to === "Millimeter") {
		result.value = Number(input.value) /1000000;
	} else if (option_from === "Nanometer" && option_to === "Micrometer") {
		result.value = Number(input.value) /1000;
	} else if (option_from === "Nanometer" && option_to === "Nanometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "Nanometer" && option_to === "Mile") {
		result.value = Number(input.value) ;
	} else if (option_from === "Nanometer" && option_to === "Yard") {
		result.value = Number(input.value) ;
	} else if (option_from === "Nanometer" && option_to === "Foot") {
		result.value = Number(input.value) ;
	} else if (option_from === "Nanometer" && option_to === "Inch") {
		result.value = Number(input.value) ;
	} else if (option_from === "Nanometer" && option_to === "Nautical") {
		result.value = Number(input.value) ;
	}



	//Mile
	if (option_from === "Mile" && option_to === "Meter") {
		result.value = Number(input.value) * 1609;
	} else if (option_from === "Mile" && option_to === "Kilometer") {
		result.value = Number(input.value) * 1.609;
	} else if (option_from === "Mile" && option_to === "Centimeter") {
		result.value = Number(input.value) * 160900;
	} else if (option_from === "Mile" && option_to === "Millimeter") {
		result.value = Number(input.value) *1609000;
	} else if (option_from === "Mile" && option_to === "Micrometer") {
		result.value = Number(input.value) * 1609000000;
	} else if (option_from === "Mile" && option_to === "Nanometer") {
		result.value = Number(input.value) * 1609000000000;
	} else if (option_from === "Mile" && option_to === "Mile") {
		result.value = Number(input.value) ;
	} else if (option_from === "Mile" && option_to === "Yard") {
		result.value = Number(input.value) * 1760;
	} else if (option_from === "Mile" && option_to === "Foot") {
		result.value = Number(input.value) * 5280;
	} else if (option_from === "Mile" && option_to === "Inch") {
		result.value = Number(input.value) * 63360;
	} else if (option_from === "Mile" && option_to === "Nautical") {
		result.value = Number(input.value) /1.151;
	}



	//Yard
	if (option_from === "Yard" && option_to === "Meter") {
		result.value = Number(input.value) /1.094;
	} else if (option_from === "Yard" && option_to === "Kilometer") {
		result.value = Number(input.value) /1094;
	} else if (option_from === "Yard" && option_to === "Centimeter") {
		result.value = Number(input.value) *91.44;
	} else if (option_from === "Yard" && option_to === "Millimeter") {
		result.value = Number(input.value) * 914.4;
	} else if (option_from === "Yard" && option_to === "Micrometer") {
		result.value = Number(input.value) * 914400;
	} else if (option_from === "Yard" && option_to === "Nanometer") {
		result.value = Number(input.value) * 91400000;
	} else if (option_from === "Yard" && option_to === "Mile") {
		result.value = Number(input.value) /1760;
	} else if (option_from === "Yard" && option_to === "Yard") {
		result.value = Number(input.value) ;
	} else if (option_from === "Yard" && option_to === "Foot") {
		result.value = Number(input.value) * 3;
	} else if (option_from === "Yard" && option_to === "Inch") {
		result.value = Number(input.value) * 36;
	} else if (option_from === "Yard" && option_to === "Nautical") {
		result.value = Number(input.value) * 2025;
	}


	

	//Foot
	if (option_from === "Foot" && option_to === "Meter") {
		result.value = Number(input.value) /3281;
	} else if (option_from === "Foot" && option_to === "Kilometer") {
		result.value = Number(input.value) /3.281;
	} else if (option_from === "Foot" && option_to === "Centimeter") {
		result.value = Number(input.value) * 30.48;
	} else if (option_from === "Foot" && option_to === "Millimeter") {
		result.value = Number(input.value) * 304.8;
	} else if (option_from === "Foot" && option_to === "Micrometer") {
		result.value = Number(input.value) * 304800;
	} else if (option_from === "Foot" && option_to === "Nanometer") {
		result.value = Number(input.value) ;
	} else if (option_from === "Foot" && option_to === "Mile") {
		result.value = Number(input.value) /5280;
	} else if (option_from === "Foot" && option_to === "Yard") {
		result.value = Number(input.value) /3;
	} else if (option_from === "Foot" && option_to === "Foot") {
		result.value = Number(input.value) ;
	} else if (option_from === "Foot" && option_to === "Inch") {
		result.value = Number(input.value) *3;
	} else if (option_from === "Foot" && option_to === "Nautical") {
		result.value = Number(input.value) /6076;
	}



	//Inch
	if (option_from === "Inch" && option_to === "Meter") {
		result.value = Number(input.value) /39.37;
	} else if (option_from === "Inch" && option_to === "Kilometer") {
		result.value = Number(input.value) /39370;
	} else if (option_from === "Inch" && option_to === "Centimeter") {
		result.value = Number(input.value) * 2.54;
	} else if (option_from === "Inch" && option_to === "Millimeter") {
		result.value = Number(input.value) * 25.4;
	} else if (option_from === "Inch" && option_to === "Micrometer") {
		result.value = Number(input.value) * 25400;
	} else if (option_from === "Inch" && option_to === "Nanometer") {
		result.value = Number(input.value) * 25400000;
	} else if (option_from === "Inch" && option_to === "Mile") {
		result.value = Number(input.value) /63360;
	} else if (option_from === "Inch" && option_to === "Yard") {
		result.value = Number(input.value) /36;
	} else if (option_from === "Inch" && option_to === "Foot") {
		result.value = Number(input.value) /12;
	} else if (option_from === "Inch" && option_to === "Inch") {
		result.value = Number(input.value) ;
	} else if (option_from === "Inch" && option_to === "Nautical") {
		result.value = Number(input.value) /72910;
	}


	//Nautical
	if (option_from === "Nautical" && option_to === "Meter") {
		result.value = Number(input.value) * 1852;
	} else if (option_from === "Nautical" && option_to === "Kilometer") {
		result.value = Number(input.value) * 1.852;
	} else if (option_from === "Nautical" && option_to === "Centimeter") {
		result.value = Number(input.value) * 185200;
	} else if (option_from === "Nautical" && option_to === "Millimeter") {
		result.value = Number(input.value) * 1852000;
	} else if (option_from === "Nautical" && option_to === "Micrometer") {
		result.value = Number(input.value) * 1852000000;
	} else if (option_from === "Nautical" && option_to === "Nanometer") {
		result.value = Number(input.value) * 1852000000000;
	} else if (option_from === "Nautical" && option_to === "Mile") {
		result.value = Number(input.value) ;
	} else if (option_from === "Nautical" && option_to === "Yard") {
		result.value = Number(input.value) * 2025;
	} else if (option_from === "Nautical" && option_to === "Foot") {
		result.value = Number(input.value) * 6076;
	} else if (option_from === "Nautical" && option_to === "Inch") {
		result.value = Number(input.value) * 72910;
	} else if (option_from === "Nautical" && option_to === "Nautical") {
		result.value = Number(input.value) ;
	}





}
