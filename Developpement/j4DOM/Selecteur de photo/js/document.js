/*
var e1 = document.getElementById("toggle-rectangle");
var e2 = document.getElementById("p");

e1.addEventListener("click", onClick);
e2.addEventListener("click", onClick)

function onClick(){
  this.textContent = "";
}*/

var photo = 0
var p = document.querySelectorAll("ul li");
var r = document.querySelector("em");

for(var i = 0; i < p.length ; i++){
  p[i].addEventListener("click",OnClick);
}

function OnClick(){
    var t = this.classList.toggle("selected");
    if(t){
      photo++;
    }
    else{
      photo--;
    }
    console.log(photo);
    r.textContent = photo;
}



/*var em = document.querySelector("em");

em.textContent(photo)

/*function OnClick(){
  this.classList.add("selected");
  photo++;
  console.log(photo);
  return true;
}
function OnClick(){
  this.classList.remove("selected");
  photo--;
  console.log(photo);
  return false;
}
/*
var photo = 0
var p = document.querySelectorAll("ul li");

for(var i = 0; i < p.length ; i++){
  p[i].addEventListener("click",OnClick);
}


function OnClick(){
  this.classList.add("selected");
  photo++;
  console.log(photo);
  return true;
}






function OnClick(){
  this.classList.toggle("selected");
  if(this.classList.toggle("selected")=="sselected"){
    photo++;
    console.log(photo);
  }
  else{
    photo--;
    console.log(photo);
  }
}

/*for(var i = 0; i<p.length; i++){
  console.log(p);
  p.addEventListener("click",OnMouseover)
  function OnMouseover(){

  }
}*/
