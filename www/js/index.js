function saveValues(){
	form_height = foot_to_inch(document.getElementById('form_ft').value, document.getElementById('form_inch').value);
	form_weight = document.getElementById('form_weight').value;
	form_sex = getRadio('form_sex');
	form_age = document.getElementById('form_age').value;

	localStorage.setItem("ft", document.getElementById('form_ft').value);
	localStorage.setItem("inch", document.getElementById('form_inch').value);
	localStorage.setItem("height", form_height);
	localStorage.setItem("weight", form_weight);
	localStorage.setItem("sex", form_sex);
	localStorage.setItem("age", form_age);
	
	now = new Date();
	localStorage.setItem("expireM", now.getMonth());
	localStorage.setItem("expireD", now.getDate());
	localStorage.setItem("expireY", now.getFullYear());
	
	if(form_sex == 'XY'){
		localStorage.setItem("kcal", metabolism_rate_men(form_weight, form_height, form_age));
	}else{
		localStorage.setItem("kcal", metabolism_rate_women(form_weight, form_height, form_age));
	}
	
	showResults();
}

function showResults(){
if (localStorage.getItem('sex')=="XY" || localStorage.getItem('sex')=="XX"){
	var result = 'BMI: ' + BMI_calculator_imperials(localStorage.getItem('weight'), localStorage.getItem('height')) + '<br />Status: ' + weight_status(BMI_calculator_imperials(localStorage.getItem('weight'), localStorage.getItem('height'))) + '<br />Calories: ';
	if(localStorage.getItem('sex') == 'XY'){
		result += metabolism_rate_men(localStorage.getItem('weight'), localStorage.getItem('height'), localStorage.getItem('age'));
	}else{
		result += metabolism_rate_women(localStorage.getItem('weight'), localStorage.getItem('height'), localStorage.getItem('age'));
	}
	document.getElementById('results').innerHTML = result;
}
}

function initialize(){
	document.getElementById('form_ft').value = localStorage.getItem('ft');
	document.getElementById('form_inch').value = localStorage.getItem('inch');
	document.getElementById('form_weight').value = localStorage.getItem('weight');
	if(localStorage.getItem('sex') == 'XY'){
			document.getElementById("form_female").checked = false;
			document.getElementById("form_male").checked = true;
	}else{
			document.getElementById("form_male").checked = false;
			document.getElementById("form_female").checked = true;
	}
	document.getElementById('form_age').value = localStorage.getItem('age');
	
	showResults();
}