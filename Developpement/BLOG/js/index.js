"use strict";
console.log("coucou!!");
var button = $("button") ;
var remarques = $(".remarques")
button.on("click",onClickButton);
function onClickButton(){
  console.log("je suis dans le click");
  remarques.toggle("button")
}
