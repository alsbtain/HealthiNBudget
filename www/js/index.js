function saveValues() {
	form_height = foot_to_inch(document.getElementById('form_ft').value, inches) + document.getElementById('form_inch').value;
	form_weight = document.getElementById('form_weight').value;
	form_sex = document.getElementById('form_sex').value;
	
	
	
	localStorage.setItem("height", form_height);
	localStorage.setItem("weight", form_weight);
	localStorage.setItem("sex", form_sex);
}