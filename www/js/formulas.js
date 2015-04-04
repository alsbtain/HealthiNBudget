//the height has to be converted to inches
function foot_to_inch (feet, inches) {
	return ((Number(feet*12)+Number(inches)))
}

//a function that will change the value back. it will return values in a list
function inch_to_foot (inches) {
	var feet = Math.floor(inches/12)
	var inch = inches%12
	var array = [feet, inch]
	return array
}

function BMI_calculator_imperials (weight, height) {
	return (weight*703)/(Math.pow(height, 2))
}

function weight_status (BMI) {
	if (BMI < 18.5) {
		return "Underweight"
	} else if ((BMI >= 18.5)&&(BMI <= 24.9)) {
		return "Normal"
	} else if ((BMI >= 25)&&(BMI <= 29.9)) {
		return "Overweight"
	} else if (BMI > 30) {
		return "Obese"
	} else {
		return "Invalid BMI"
	}
}

//make sure you use converted height
function metabolism_rate_men (weight, height, age) {
	return (((6.25*weight)+(12.7*height)-(6.76*age)+66)*1.1)
}

function metabolism_rate_women (weight, height, age) {
	return (((4.35*weight)+(4.7*height)-(4.68*age)+655)*1.1)
}
