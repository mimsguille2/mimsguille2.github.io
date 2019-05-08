var items = document.getElementsByClassName("noSecure");
var checkbox = document.getElementById('chbx');
var secret = document.getElementsByClassName("nelSecure")

//Hide when loaded
for (var i=0; i < items.length; i++){
  items[i].style.display = "none";
 }

function secure() {
  if (checkbox.checked) {
    for (var i=0; i < items.length; i++){
      items[i].style.display = "none";
     }
  } else {
    for (var i=0; i < items.length; i++){
      items[i].style.display = "inline";
    }
  }
}

function superuser() {
  var input = prompt("INTRODUZCA EL CÓDIGO:");
  if (input == "2001") {
    alert("CORRECTO!");
  }
}
