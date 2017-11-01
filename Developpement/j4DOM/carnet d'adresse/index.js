/*/
//var plus = $("#plus");

var liste = new Array();
$("#plus").on("click",onClickPlus);

function onClickPlus(){
  //var section = $(".section");
  $(".form").toggle();

}

$(".enregistrer").on("click",onClick);

function onClick(){
  /*var t = [
    $(".civilite").val(),
    $(".nom").val(),
    $(".prenom").val(),
    $(".tel").val(),
  ];

  var t = {
    civilité : $(".civilite").val(),
    nom : $(".nom").val(),
    prenom : $(".prenom").val(),
    tel : $(".tel").val(),
  }
  //console.log(t.nom);
  liste.push(t);
  //console.log(liste);
  refresh();
  $(".form").hide();
  $(".form").trigger('reset');
};

function refresh(){
  var e="";
  for(var i =0; i<liste.length; i++){
    e = e + "<li>"+"<a href=''>"+liste[i].nom.toUpperCase()+" "+liste[i].prenom+"</a>"+"</li>"
  }
  $("#addressBook").html("<ul>" + e + "</ul>");
}

$("#trash").on("click",onTrash);
function onTrash(){
   liste = [];
   refresh();
}*/

//remettre en place le code :

//variables globales
var liste = new Array();


//fonctions evenements
function onClickPlus(){
  //var section = $(".section");
  $(".form").toggle();
  $("#coordonnee").hide();
}

function onClick(){
  /*var t = [
    $(".civilite").val(),
    $(".nom").val(),
    $(".prenom").val(),
    $(".tel").val(),
  ];*/

  var t = {
    civilité: $(".civilite").val(),
    nom: $(".nom").val(),
    prenom: $(".prenom").val(),
    tel: $(".tel").val(),
  }
  //console.log(t.nom);
  liste.push(t);
  //console.log(liste);
  refresh();
  $(".form").hide();
  $(".form").trigger('reset');
};


function refresh(){
  var e="";
  for(var i =0; i<liste.length; i++){
    //e = e + "<li>"+"<a href='#' data-index=' "+i+"'>"+liste[i].nom.toUpperCase()+" "+liste[i].prenom+"</a>"+"</li>";
    e = e + '<li><a href="#" data-index="'+i+'">'+liste[i].nom.toUpperCase()+" "+liste[i].prenom+"</a>"+"</li>";
  }
  $("#addressBook").html("<ul>" + e + "</ul>");
}

function onTrash(){
   liste = [];
   refresh();
   $("#coordonnee").hide();
}

function onA(){
  console.log(this.textContent);
  var d = $(this).data("index");
  //console.log(d);
  //console.log(liste);
  //console.log(liste[d]);
  // console.log(liste[0].nom);
  $("#coordonnee").html("<p>"+liste[d].civilité +" "+liste[d].nom.toUpperCase()+" "+liste[d].prenom +"<br> "+liste[d].tel +"</p>");
}

//autres codes
$("#plus").on("click",onClickPlus);
$(".enregistrer").on("click",onClick);
$("#trash").on("click",onTrash);
$(document).on("click","#addressBook a",onA);
