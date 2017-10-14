//Idem php
document.write("bonjour");


var age = 42;
age += 5;
if(age<10){
  document.write("enfant");
}
else{
  document.write("adulte");
}

var couleur = ["rouge", "bleu"];
for(var i = 0; i<couleur.length;i++){
  document.write("<p>+couleur[i]+</p>")
}

if(age<=18){
  for(var i = 0; i<50 ; i++){
    document.write("<p>c'est interdit pour toi!!!!!!!</p>") ;
  }
} else if(19<age && age<100){
  document.write("<p>A vous de jouer!!</p>");
} else{
  document.write("<p>ha ha ha MDR!!</p>");
}

function add(a,b){
  var res = a + b;
  return res;
}
var r = add(40,2);
document.write(r);

var harryP = {
  annee : 2002,
  acteurs : [0000],
  auteur = "",
};//tableau objet
document.write(harryP.annee);
