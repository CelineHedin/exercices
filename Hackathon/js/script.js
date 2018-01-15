"use strict";


var img = document.getElementById("horreur");
var x = setInterval(test,10000);
function test(){
  img.classList.toggle("horreur");
}
