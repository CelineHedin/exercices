'use strict';
/*
//Les Boucles
//afficher "hello" 20 fois de suite
for(var counter=0;counter<20;counter++){
  document.write("<p>hello!!</p>");
};
//afficher tous les nombres entre 0 et 42
for(var chiffre=0;chiffre<43;chiffre++){
  document.write("<p>"+chiffre+","+"</p>");
}
//afficher tous les nombres entre 0 et 42, sauf le nombre 21
for(var chiffre=0;chiffre<43;chiffre++){
  if(chiffre!=21){
      document.write("<p>"+chiffre+","+"</p>");
  }
}
//afficher tous les nombres entre 10 et 42
for(var chiffre=10;chiffre<43;chiffre++){
  document.write("<p>"+chiffre+","+"</p>");
}
//afficher tous les nombres entre 42 et 0
for(var chiffre=42;chiffre>=0;chiffre--){
  document.write("<p>"+chiffre+","+"</p>");
}
//écrire toutes les couleurs du tableau avec boucle for
var couleurs=["bleu", "rouge", "vert", "jaune"];
for(i=0;i<[4];i++){
  document.write("<p>"+couleurs[i]+"</p>");
}
//ou
for(i=0;i<couleurs.length;i++){
  document.write("<p>"+couleurs[i]+"</p>");
}*/
//trouver la phrase la plus longue :
var i;
var tmp;
var longueurMax;
var phrases =
[
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
    "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    "Maecenas nec odio et ante tincidunt tempus.",
    "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
    "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
    "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
    "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
];
for(i=0;i<phrases.length;i++){
  document.write("<p>"+phrases[i]+""+phrases[i].length+"</p>");
  tmp = phrases[i].length;
  if(tmp>longueurMax){
    longueurMax=tmp;
  }
  else{}
}

document.write(longueurMax);
