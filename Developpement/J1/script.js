"use strict";
/*var prenom;
prenom = "celine";

var nom;
nom = "Hedin";

const age = 30;

document.write(prenom);/*pour écrire dans html
console.log(nom);//pour écrire dans le débugger//
window.alert(age);/*pour écrire dans une pop up
window.prompt("quel est ton age"); pop up pour poser une question

var vie = 3;
vie = 4;
vie = 1+5;
document.write(vie);
vie = vie + 1;
document.write(vie);
vie = vie++;
document.write(vie);

const taux_de_tva = 20.0;
var montantHT;
var montantTTC;
var montantTVA;

montantHT = 100;
montantHT++;

console.log(montantHT);

montantHT--;

console.log(montantHT);

montantTVA = montantHT * taux_de_tva / 100;
montantTTC = montantHT + montantTVA;

document.write(montantTTC);

var nom = "hedin";
var prenom = "celine";
document.write(nom);
document.write("<br>");
document.write(prenom);

var reponse = window.prompt("prenom?");
console.log(reponse);

var prenom = window.prompt("Bonjour, quel est ton prénom?");
document.write("Bonjour " +prenom+" !<br>");methode de br pour etre plus rapide!!

document.write("<br>");

var age = window.prompt("quel est ton age ?");
document.write("tu as " +age+ " ans");

var age = window.prompt("quel age as-tu?");
age = parseInt(age);
document.write("Dans 5 ans tu auras "+(age+5)+" ans");

parseInt : pour les nombres entier
parseFloat: pour les nombres décimales

var chiffre = window.prompt("donnez moi un chiffre :");
var autre = window.prompt("donnez moi un autre chiffre :");
chiffre = parseFloat(chiffre);
autre = parseFloat(autre);
var result = chiffre + autre;
document.write("la somme des deux chiffres est : " + result);
*/
/*const taux_tva = 20.0;
var montantHT = window.prompt("quel est votre montant HT?");
montantHT = parseFloat(montantHT);
var montantTVA = montantHT*(taux_tva/100);
var resultatTTC = montantHT+montantTVA;
document.write("Votre résultat TTC est de: "+resultatTTC);
/*document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + resultatTTC + ' €.</p>');

au lieu de
var rouge = "rouge";
var bleu ="bleu";
var jaune = "jaune";

il faut noter :
var couleurs = [ "bleu", "rouge", "jaune"];
console.log(couleurs[1]); donne la couleur rouge
si on veut changer une couleur par une autre :
couleurs[2]="rose"
creer une couleur:
couleurs[4]="vert"

var semaine = [ "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
console.log (semaine[0]+" "+semaine[6]);

var jeux =[ "Mario", "Portal", "Mest Boy", "Mario 2"];
consol.log(jeux[1]);
creer tableau : new Array()

var date = new Date();
var minutes = date.getMinutes();
console.log(minutes);

var date = new Date();
var day = date.getDay();
var number = date.getDate();
var month = date.getMonth();
var years = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var dayOfWeek = [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
var monthOfYear = [ "janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
var jour = dayOfWeek[day];
var mois = monthOfYear[month];

document.write("Nous sommes le "+ jour +" "+ number+" "+ mois +" "+ years+" il est "+hours+" heures et "+minutes+" minutes.");*/

/*var harryPotter = new Object();
harryPotter.titre = "Harry Potter";
harryPotter.acteur = ["a","b","c"];
harryPotter.sortie = 2002;
console.log(harryPotter.acteur[2]);

var harryPotter = {
  titre:"HP",
  sortie: 2002,
  acteurs: ["a","b","c"],
};/*idem que au dessus, pour mélanger les sujets. ce sont des propriétés de Harry Potter*/

/*var car = {marque:"vw",
  anneeFabrication: 2015,
  dateAchat: new Date("2015-06-20"),
  passagers:["celine","nico","leny","courtney"],
};
document.write(car.dateAchat);

document.write("<ul>"+"<li>"+car.marque+"</li>"+"<li>"+car.anneeFabrication+"</li>"+"<li>"+car.dateAchat.toDateString()+"</li>"+"<li>"+car.passagers+"</li>"+"</ul>");/*bon mais trop raccourci*/

 /*correction:*/
/*document.write('<strong>Informations sur la voiture :</strong>');

var car = {
	brand: 'Tesla',
	year: 2010,
	passengers: [ 'A', 'B' ],
	buyDate: new Date('2013-06-20'),
};

document.write('<ul>');

document.write('<li>Marque : ' + car.brand + '</li>');
document.write('<li>Année de fabrication : ' + car.year + '</li>');
document.write("<li>Date de l'achat : " + car.buyDate + '</li>');
document.write('<li>Passager 1 : ' + car.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + car.passengers[1] + '</li>');

document.write('</ul>');*/
/*
//Conditions :
var prenom = "thomas";
var age = 5;
var t = [];
var o = {};
//les booléens
//var isAdult = true; //vrai;
//var isAdult = false; //faux;
var isAdult = (age>=18);
console.log(isAdult);

// = affectation
// == comparaison
// === strictement égale

if(isAdult){
  console.log("Bonjour");
}
else{
  console.log("Bye");
}

if(age>10&&age<20){
  console.log("Bonjour");
} //si age est compris entre 10 et 20

if(10>age||age<20){
  console.log("hello")
} // si age est supérieur OU à 10 OU à 20*/



/*var montantHT = window.prompt("quel est votre montant HT?");
montantHT = parseFloat(montantHT);
var montantTVA = montantHT*(taux_tva/100);
var resultatTTC = montantHT+montantTVA;
/*document.write("Votre résultat TTC est de: "+resultatTTC);*/
/*var remise= window.prompt("Avez vous une remise ?");
if(remise== "oui"||remise == "yes"){
  var montant=window.prompt("Quel est le montant en % de la remise ?");
  montant = parseFloat(montant);
  remise = montantHT * (montant/100);
  var nouveauMontantHT = montantHT-remise;
  var nouveauResultatTTC = nouveauMontantHT + montantTVA;
  document.write("Votre résultat TTC avec la remise est de :"+nouveauResultatTTC + "euros");
}
else{
  document.write("Votre résultat TTC est de: "+resultatTTC);
}
console.log(remise,nouveauMontantHT);
console.log(resultatTTC);*/
/*correction*/
/*var montantHT;
var remise;
var tauxRemise;
var montantTVA;
var montantTTC;
const TAUX_TVA = 20;

montantHT = window.prompt("montant HT...");
montantHT = parseFloat(montantHT);

remise = window.prompt("remise ...");

if (remise == "oui"||remise=="yes") {
  tauxRemise = window.prompt("taux remise ...");
  tauxRemise = parseFloat(tauxRemise);

  //
  montantHT = montantHT - (montantHT * tauxRemise / 100);
  montantTVA = montantHT * TAUX_TVA / 100;
  montantTTC = montantHT + montantTVA;

  console.log(montantHT, montantTVA, montantTTC);
}
else {
  montantTVA = montantHT * TAUX_TVA / 100;
  montantTTC = montantHT + montantTVA;

  console.log(montantHT, montantTVA, montantTTC);
}*/

//exercice2
/*
var nombre1;
var nombre2;
var operateur;
var result;
nombre1 = window.prompt("Saisissez un premier nombre :");
nombre1= parseFloat(nombre1);
nombre2 = window.prompt("Saisissez un deuxième nombre :");
nombre2 = parseFloat(nombre2);
operateur = window.prompt("opérateur ?");
console.log(nombre1, nombre2, operateur);
if(operateur=="+"||operateur=="addition"){
  result=nombre1+nombre2;

}
else if(operateur=="-"||operateur=="soustraction"){
  result=nombre1-nombre2;

}
else if(operateur=="*"||operateur=="multiplication"){
  result=nombre1*nombre2;

}
else if(operateur=="/"||operateur=="division"){
  if(nombre2===0){
    document.write("Désolé, nous ne pouvons pas diviser par 0");
  }
  else{
    result=nombre1/nombre2;

  }
}
else{
  document.write("Cet opérateur n'est pas valide!");
}
if (isNaN(result)){
  document.write("Vous n'avez pas defini de nombre!!")
  result = undefined;
}
if(result !=undefined){
    document.write("Votre opération donne : "+result);
}
*/

//Exercice Pierre feuille ciseau
//correction :



var player1;
var player2;
var message;
var rand = Math.random();

player1 = window.prompt('Joueur 1 : pierre, feuille ou ciseau ?');
/*player2 = window.prompt('Joueur 2 : pierre, feuille ou ciseau ?');*/

if(rand<0.33){
  player2 = "feuille";
}
else if(rand<0.66){
  player2= "ciseau";
}
else{
  player2= "pierre";
}
console.log(player2);

player1 = player1.toLowerCase();
player2 = player2.toLowerCase();

// cas égalité
if (player1 == player2)
{
  message = 'Vous avez choisi la même chose : égalité !';
}

// cas player 1 = ciseau
else if (player1 == 'ciseau') {
  if (player2 == 'pierre') {
    message = 'La pierre écrase le ciseau : joueur 2 gagne !';
  }
  else if (player2 == 'feuille') {
    message = 'La feuille est découpée par le ciseau : joueur 1 gagne !';
  }
}

// cas player 1 = feuille
else if (player1 == 'feuille') {
  if (player2 == 'pierre') {
    message = 'La pierre est enveloppée par la feuille : joueur 2 gagne !';
  }
  else if (player2 == 'ciseau'){
    message = 'Le ciseau découpe la feuille : joueur 1 gagne !';
  }
}

// cas player 1 = pierre
else if (player1 == 'pierre') {
  if (player2 == 'feuille') {
    message = 'La feuille enveloppe la pierre : joueur 2 gagne !';
  }
  else if (player2 == 'ciseau'){
    message = 'Le ciseau est écrasé par la pierre : joueur 1 gagne !';
  }
}

// affichage
if (message != undefined) {
  document.write("<p>" + message + "</p>");
}
else {
  document.write("erreur");
}
