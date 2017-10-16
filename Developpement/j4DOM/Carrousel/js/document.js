/*var index = 0;
var t = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
var s = ["lorem1","lorem2","lorem3","lorem4","lorem5","lorem6",]
//masquer/afficher la barre d'outil :
var toolBar = document.querySelector("p");
var botton = document.querySelectorAll("button");

toolBar.addEventListener("click",onClicktoolBar);

function onClicktoolBar(){
  for(var i = 0; i< botton.length; i++){
    botton[i].classList.toggle("hide");
    console.log("click bouton OK");
  }
}

//inserer les images dans img src du HTML
var img = document.querySelector("img");
img.src = t[index];

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
/*var img = document.querySelector("img");
var next = document.getElementById("slider-next");


next.addEventListener("click", nextClickImg);


function nextClickImg(){
  if(index===5){
    index = 0;
    console.log("remise à 0");
  }
  else{
    index++;
    console.log(index)
  }
  img.src = t[index];
  titre.textContent = s[index];
}


//faire en sorte que le bouton previous change l'image
var previous = document.getElementById("slider-previous");
previous.addEventListener("click", previousClickImg);

function previousClickImg(){
  if(index === 0){
    index = 5;
    console.log("remise à 0");
  }
  else{
      index--;
  }
  img.src = t[index];
  titre.textContent = s[index]; // t[0]
  console.log(index);
}

//Afficher le titre sous les images
var titre = document.querySelector("h2");
titre.textContent = s[index];

//commander le bouton random

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
}*/


//redisposer le code
//variables globales
var t;
var index;
var s;
var slides;
var timer;
//function generale

function init(){
  index = 0;
  timer = null;

  slides = [
    {image : "images/1.jpg",legende : "lorem1"},
    {image : "images/2.jpg",legende : "lorem2"},
    {image : "images/3.jpg",legende : "lorem3"},
    {image : "images/4.jpg",legende : "lorem4"},
    {image : "images/5.jpg",legende : "lorem5"},
    {image : "images/6.jpg",legende : "lorem6"},
  ]

  console.log(slides[index].image);
  console.log(slides[index].legende);

  var toolBar = document.querySelector("p");
  var botton = document.querySelectorAll("button");
  var next = document.getElementById("slider-next");
  var previous = document.getElementById("slider-previous");
  var random = document.getElementById("slider-random");
  var play = document.getElementById("slider-toggle");


  toolBar.addEventListener("click",onClicktoolBar);
  next.addEventListener("click", nextClickImg);
  previous.addEventListener("click", previousClickImg);
  random.addEventListener("click", randomClickImg);
  play.addEventListener("click", playClickImg);
  document.addEventListener("keyup",onKey);

  refresh();

}
function refresh(){
  var img = document.querySelector("img");
  var titre = document.querySelector("h2");

  img.src = slides[index].image;
  titre.textContent = slides[index].legende;
}
//function evenement
function onClicktoolBar(){
  for(var i = 0; i< botton.length; i++){
    botton[i].classList.toggle("hide");
    console.log("click bouton OK");
  }
}

function nextClickImg(){
  if(index === 5){
    index = 0;
    console.log("remise à 0");
  }
  else{
    index++;
    console.log(index)
  }
  refresh();
}

function previousClickImg(){
  if(index === 0){
    index = 5;
    console.log("remise à 0");
  }
  else{
      index--;
  }
  refresh();
  console.log(index);
}
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomClickImg(){
  index = getRandomInteger(0,slides.length - 1);
  refresh();
  console.log(index);
}

function playClickImg(){
  var icon = document.querySelector("#slider-toggle i");
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");
  if(timer==null){
    console.log("je suis dans le if")
    timer = window.setInterval(nextClickImg,1000);
  }
  else{
    window.clearInterval(timer);
    timer = null;
  }
}

function onKey(event){
  if(event.keyCode==39){
    nextClickImg();
  }
  else if(event.keyCode==37){
    previousClickImg();
  }
}

//code
document.addEventListener("DOMContentLoaded",init);//appel la fonction init lorsque la page HTML a chargé
