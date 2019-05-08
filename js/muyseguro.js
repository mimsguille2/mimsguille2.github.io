//Le botón muy seguro

var btn = document.querySelector('input');
var itemus = document.getElementsByClassName("nelSecure");

btn.addEventListener('click', updateBtn);

function hitler() {
   if (btn.value === 'muy_on') {
    btn.value = 'muy_off';
	   for (var i=0; i < itemus.length; i++){
      itemus[i].style.display = "inline";
}
    
  } else {
    btn.value = 'muy_on'; 
	   for (var i=0; i < itemus.length; i++){
	itemus[i].style.display = "none";
	   }
}
	

	
