var index = 0;
var t = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
var s = ["lorem1","lorem2","lorem3","lorem4","lorem5","lorem6",]
//masquer/afficher la barre d'outil :
var toolBar = document.querySelector("p");
var botton = document.querySelectorAll("button");

toolBar.addEventListener("click",onClicktoolBar);

function onClicktoolBar(){
  for(var i = 0; i< botton.length; i++){
    botton[i].classList.toggle("hide");
    console.log("click bouton OK")
  }
}

//inserer les images dans img src du HTML
var img = document.querySelector("img");
var titre = document.querySelector("h2");

img.src = t[index];
titre.textContent = s[index];

/*img.addEventListener("click", onClickImg);

function onClickImg(){
  img.src = t[index];
  if(index==5){
    index = 0;
    console.log("remise à 0")
  }
  else {
    index++
    console.log("+1")
  }
}*/

// 2. au chargement de la page, afficher la premiere image du carrousel en js
	//    (on ne s'occupe pas du titre sous l'image pour le moment)

	/*function refresh() {
		var sliderImage  = document.querySelector('#slider img');
		sliderImage.src = slides[index];
	}*/



//faire en sorte que le bouton next change les images
var img = document.querySelector("img");
var next = document.getElementById("slider-next");

next.addEventListener("click", nextClickImg);

function nextClickImg() {
  if (index === 5){
    index = 0;
    console.log("remise à 0");
  } else{
    index++;
    console.log(index);
  }
  img.src = t[index];
  titre.textContent = s[index];
}


//faire en sorte que le bouton previous change l'image
var previous = document.getElementById("slider-previous");
previous.addEventListener("click", previousClickImg);

function previousClickImg() {
  if (index === 0) {
    index = t.length - 1;
    console.log("remise à 0");
  } else {
    index--; // index = 0
  }

  img.src = t[index]; // t[0]
  console.log(index);
  titre.textContent = s[index];
}

//Afficher le titre sous les images


//commander le bouton random
/*
var random = document.getElementById("slider-random");
random.addEventListener("click", randomClickImg);

function randomClickImg(){
  img.src = MathRandom(t[index]);
  /*if(index==0){
    index = 5;
    console.log("remise à 0")
  }
  else {
    index--
    console.log("+1")
  }
}
*/
