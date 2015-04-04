function getRadio(name){
	var oRadio = document.getElementsByName(name);
	for(var i = 0; i < oRadio.length; i++){
      if(oRadio[i].checked){
         return oRadio[i].value;
      }
	}
   return '';
}