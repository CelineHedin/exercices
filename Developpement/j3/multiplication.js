"use strict";

/*var tableau = ["Celine","Nico","Courtney","Leny"];

for (var i = 0; i<tableau.length; i++){
  alert(tableau[2]);
}

//1. créer une variable t qui contient une table de multiplication par 3
var t = [
  [1,2,3],
  [2,4,6],
  [3,6,9],
];
var x;
var y;

console.log(t[0][0]); //on veut récuperer le chiffre 1 du tableau
console.log(t[1][2]);

//2. avec des boucles for, afficher le contenu de la variable
for(var i=0;i<t.length;i++){
  for(var j=0;j<t[i].length;j++){
    document.write(t[i][j]);
  }
}
// 3. utiliser <table> <tr> <td> pour faire un jolie affichage
document.write("<table>");

for(var i=0;i<t.length;i++){

  document.write("<tr>");
  for(var j=0;j<t[i].length;j++){

    document.write("<td>" + t[i][j] + "</td>");
    document.write(t[i][j]+"</td>");
  }
  document.write("</tr>");
}
document.write("</table>"+"<br>");

// 4. faire un jolie affichage en css
  //fait

// 5. la diagonale de la table html (1x1, 2x2, 3x3, ...) doit avoir un couleur differente
document.write("<table>");

for(var i=0;i<t.length;i++){

  document.write("<tr>");
  for(var j=0;j<t[i].length;j++){

    //document.write("<td>" + t[i][j] + "</td>");
    if(i==j){
      document.write("<td class='color'>");
    }
    else {
      document.write("<td>");
    }
    document.write(t[i][j]+"</td>");
  }
  document.write("</tr>");
}
document.write("</table>");


	// 6. (question optionelle)
	//    demander a l'utilisateur de choisir la taille de la table de multiplication (exemple : 12)
	//    et l'afficher
var k = window.prompt("Donnez moi la taille de votre table");
k=parseInt(k);

var t = [];

document.write("<br>"+"<table>");

for(var line=0; line<k; line++){
  document.write("<tr>");
  t[line] = [];

  for(var col=0; col<k; col++){
    if(col==line){
      document.write("<td class='color'>");
    }
    else {
      document.write("<td>");
    }
    t[line][col]= (col+1)*(line+1);
    document.write(t[line][col]+"</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
var c = window.prompt("donnez un chiffre");
c = parseInt(c);
console.log(c);

while(isNaN(c)){
  var c = window.prompt("donnez un chiffre");
  c = parseInt(c);
  console.log(c);
}
document.write("Vous avez choisi:" + c)*/
//meme chose que :
do{
  var c = parseFloat(window.prompt("donnez un chiffre"));

}while(isNaN(c))

document.write("Vous avez choisi:" + c)
