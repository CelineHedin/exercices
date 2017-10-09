"use strict";

/*function bonjour(){
  console.log("Bonjour Thomas");
}

bonjour();
//////////////////////////////////////////////////

function bonjour(prenom,nom){
  console.log("Bonjour " + prenom +" "+ nom);
}
bonjour("Thomas","Lefevre");

///////////////////////////////////////////////////////

function addition(a,b){
  console.log(a+b);
}
addition(1,2);

////////////////////////////////////////////////////////

function division(a,b){
  if (b==0){
    document.write("pas divisible par 0");
  }
  else{
    document.write(a/b);
  }
}
division(5,6);

/////////////////////////////////////////////////////////////

//afficher un tableau qui affiche tous les elements du tableau dans la console
var t = ["a","b","c"];

function tableau(t){
  for (var i=0; i<t.length ; i++){
  document.write(t[i]);
  }
}
tableau(t)
var a = parseInt(window.prompt("donnez une valeur : "));
var b = parseInt(window.prompt("donnez une valeur : "));

//////////////////////////////////////////////////

function max(a,b){
  if (a>b){
    console.log(a);
  }
  else {
    console.log(b);
  }
}
max(a,b)

/////////////////////////////////////////////////////////

function add2 (a,b,c){
  if (a+b+c>100){
    console.log(a+b+c)
  }
}

add2(1,2,3)
add2(100,2,3);
add2(1000,20000,300000)

////////////////////////////////////////////////////////

function add3(a,b){
  var rep = a+b;
  return rep;
}
var toto = add3(1,2);
console.log(toto);

//////////////////////////////////////////////////////////

function div(a,b){
  if(b==0){
    return 0;
  }else{
    return a/b;
    }
}
var titi = div(12,5);
document.write(titi);

/////////////////////////////////////////////////////////////

// notre liste de courses, vide au depart
var t=["apple","banana"];
var item;
// variable globale qui est directement utilisé par nos fonctions
//var shoppingList = [];

// affiche tous les elements de notre liste (affiche rien car la liste est vide)



// ajoute des elements a notre liste
//addItem('Patate');
///addItem('Banane');
//addItem('Cornichon');

// affiche tous les elements de notre liste (affiche : patate, banane, cornichon)
//displayShoppingList();

// affiche le nombre d'elements de notre liste
//displayShoppingListSize();

// supprimer un element de notre liste
//removeItem('Banane');

// affiche tous les elements de notre liste (affiche : patate, cornichon)
//displayShoppingList();

// supprimer tous les elements de notre liste
//removeAllItems();

// affiche tous les elements de notre liste (affiche rien car la liste est vide)
//isplayShoppingList();

function longueurDuTableau(){
  console.log(t.length);
}
longueurDuTableau()


function displayShoppingList(){
  for (var i=0; i<t.length ; i++){
    console.log(t[i]);
  }
}
displayShoppingList();

function addItem(item){
  t.push(item);
  document.write(t.join(","));
}
addItem("patates");

function removeItem(item){
  var index = t.indexOf(item);
  t.splice(index,1);
  document.write("<br>" + t)
}
removeItem("banana");

function removeAllItems(){
  t = [];
  document.write("<br>" + t)
}

/* correction :

<script>

	function displayShoppingListSize() {
		console.log(shoppingList.length);
	}

	function displayShoppingList() {
		for (var i = 0; i < shoppingList.length; i++) {
			console.log(shoppingList[i]);
		}
	}

	function addItem(item) {
		//shoppingList[shoppingList.length] = item;
		shoppingList.push(item);
	}

	function removeAllItems() {
		shoppingList = [];
	}

	function removeItem(item) {
		var index = shoppingList.indexOf(item);
		shoppingList.splice(index, 1);
	}


	// notre liste de courses, vide au depart
	// variable globale qui est directement utilisé par nos fonctions
	var shoppingList = [];


	addItem("banane");

  /////////////////////////////////////////////////

  //Jeu de dragon

  <script>

  // les fonctions

  function init() {
      // initialise les variables
      // et affiche les stats du jeu (pv)
  }

  function loop() {
      // tant que la partie n'est pas fini
      // le joueur attaque le dragon
      // et on affichage les stats (pv)
  }

  function result() {
      // affiche le vainqueur
  }

  // retourne un nombre aléatoire entre min et max
  function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // le code principale

  var playerPV;
  var dragonPV;
  var round;

  init();
  loop();
  result();*/


  //le combat entre vous et le dragon commence...  ex1.js:10:5
  //stats : vous avez 20pv et le dragon a 20pv  ex1.js:55:5
  //====  ex1.js:17:9
  //tour : 1  ex1.js:18:9
  //action : vous attaquez le dragon et lui faite perdre 1pv  ex1.js:36:9
  //stats : vous avez 20pv et le dragon a 19pv  ex1.js:55:5
  //====  ex1.js:17:9
  //tour : 2  ex1.js:18:9
  //action : vous attaquez le dragon et lui faite perdre 6pv  ex1.js:36:9
  //stats : vous avez 20pv et le dragon a 13pv  ex1.js:55:5
  //====  ex1.js:17:9
  //tour : 3  ex1.js:18:9
  //action : vous attaquez le dragon et lui faite perdre 5pv  ex1.js:36:9
  //stats : vous avez 20pv et le dragon a 8pv  ex1.js:55:5
  //====  ex1.js:17:9
  //tour : 4  ex1.js:18:9
  //action : vous attaquez le dragon et lui faite perdre 8pv  ex1.js:36:9
  //stats : vous avez 20pv et le dragon a 0pv  ex1.js:55:5
  //====  ex1.js:45:5
  //vous gagnez !!  ex1.js:47:9

/*
  var joueur;
  var dragon;
  var round;

  function init(){
    joueur = 20;
    dragon = 20;
    round = 1
    document.write("Le combat va commencer <br>");
    document.write("Le joeur a " + joueur + " PV et le dragon a " + dragon + "PV");
  }

  function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function joueurAttack() {
    dragon = dragon - getRandomInteger(1, 5);
    round++;
    console.log(dragon);
    document.write("Le dragon n'a plus que " + dragon + "PV <br>")
  }
  function dragonAttack() {
    joueur = joueur - getRandomInteger(1, 5);
    round++;
    console.log(joueur);
    document.write("Le joueur n'a plus que " + joueur + "PV <br>")
  }

  function combat() {
    while (dragon > 0 && joueur > 0) {
      if (round%2 == 0) {
        dragonAttack();
      } else {
        joueurAttack();
      }
    }
    if (dragon <= 0) {
      document.write("Le dragon a perdu!! C'est le joueur qui gagne...")
    } else{
      document.write("Le joueur a perdu!! C'est le Dragon qui gagne...")
    }
  }

  init();
  joueurAttack();
  combat();
*/

  /*var joueur;
  var dragon;
  var round;

  function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function init()  {
    round = 1;
    joueur = 20;
    dragon = 20;
    document.write("Le combat entre vous et le dragon commence...<br/>");
    document.write("vous avez " + joueur + "pv et le dragon a " + dragon + "pv<br/>")
  }

  function attackDragon() {
    round++;
    dragon -= getRandomInteger(1, 5);
  }

  function startCombat() {
    while (dragon > 0) {
      document.write("Tour " + round + "<br/>");
      console.log(dragon);
      attackDragon();
    }
  }

  init();
  startCombat();


  /*var prenoms = ["Nicolas", "Celine", "Courtney", "Leny", "Tequila"];

  console.log(prenoms[1]);

  prenoms.push("Muscat");
  console.log(prenoms);

  for(var i = 0; i < prenoms.length ; i++) {
    document.write(prenoms[i]);
  };*/

var joueurPV;
var dragonPV;
var round;
var joueurPuissance;

/*function init() {
  joueurPV = 20;
  dragonPV = 20;
  round = 1;
  document.write("Le joueur a "+ joueurPV + " PV et le dragon a "+ dragonPV + "PV <br>");
}*/

function gameDificulty(){
  var d = window.prompt("Difficulté du jeu :");
  if(d == "facile") {
    joueurPV = 20;
    dragonPV = 20;
    round = 1;
  }
  else if(d == "moyen") {
    joueurPV = 20;
    dragonPV = 35;
    round = 1;
  }
  else {
    joueurPV = 20;
    dragonPV = 50;
    round = 1;
  };
  console.log("le dragon a " + dragonPV);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function armPlayer() {
  var a = window.prompt("Arme selectionnée (épée, pistolet, fourchette) :");
  if(a == "pistolet"){
    joueurPuissance = 5;
  }
  else if (a == "épée") {
    joueurPuissance = 3;
  }
  else {
    joueurPuissance = 0;
  }
}

function potion(){
  //a faire!!
}

function joueurAttack() {
  dragonPV = dragonPV - joueurPuissance - getRandomInteger(1,5)//pour faire aleatoirement;
  console.log("le dragon a : " + dragonPV);
  round++;
}

function dragonAttack() {
  if(Math.random()<0.1){
    console.log("esquive du joueur");//creer l'esquive aleatoirement
  }
  else{
    joueurPV = joueurPV - getRandomInteger(1,5);
    console.log("le joueur a :" + joueurPV);
    round++;
  }
}


function attack() {
  while(dragonPV > 0 && joueurPV > 0) {
    if(getRandomInteger(1,2)%2){
      dragonAttack();
    }
    else{
      joueurAttack();
    }
  }
}

function result() {
  if (joueurPV<0){
    document.write("le joueur a perdu !! ");
  }
  else{
    document.write("le dragon a perdu !! ")
  }
}

/*init();*/
gameDificulty();
armPlayer();
joueurAttack();
dragonAttack();
attack();
result();
