function getRadio(name){
	var oRadio = document.forms[0].elements[name];
	for(var i = 0; i < oRadio.length; i++){
      if(oRadio[i].checked){
         return oRadio[i].value;
      }
	}
   return '';
}

function saveValues() {
	form_height = foot_to_inch(document.getElementById('form_ft').value, inches) + document.getElementById('form_inch').value;
	form_weight = document.getElementById('form_weight').value;
	form_sex = getRadio('form_sex');
	localStorage.setItem("height", form_height);
	localStorage.setItem("weight", form_weight);
	localStorage.setItem("sex", form_sex);
	alert(form_height);
	alert(form_weight);
	alert(form_sex);
}