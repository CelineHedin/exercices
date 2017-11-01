"use strict";


function getFile1(content){
  console.log(content);
  $(".section").html(content);
}

function onExecute(){
  console.log("coucou");
  var choice = parseInt($('input[type=radio]:checked').val());
  switch (choice) {
    case 0:
      $.get("test1.html", getFile1);
      console.log("c'est le premier!!");
      break;
    case 1:
      console.log("c'est la 2eme");
      break;
    case 2:
      console.log("c'est le 3eme");
      break;
  }
  console.log(choice);
}

$(function(){
  $("#button").on("click",onExecute);
})
