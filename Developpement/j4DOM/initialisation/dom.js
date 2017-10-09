/*var e = document.getElementById("one");
e.textContent = " Bonjour ";
e.innerHTML = "<span>Bonjour</span>";

var f = document.querySelector("p");
f.textContent = "Yo!!!";

var g = document.querySelector("ul li:first-child");
g.textContent = "Toto";

var h = document.querySelectorAll("ul li");
for (var i = 0;i < h.length ; i++){
  h[i].textContent = "titi";
}

var i = document.querySelector("#one");
i.addEventListener("click", onClickH1);

function onClickH1(){
  i.textContent = "Yo !!"
}*/

/*var j = document.querySelector("p");
j.addEventListener("click", toto);

function toto(){
   j.innerHTML = "<img src='https://3wa.fr/wp-content/themes/3wa2015/img/logos/big.png'></img>";
}
*/

/*var k = document.querySelector("img");//supprimer l'image
k.classlist.toggle(.img)*/


var e = document.querySelector("button");

e.addEventListener("click", onClickButton);

function onClickButton() {

	var img = document.querySelector("img");
	img.classList.toggle("hide");

  if(e.textContent =="masquer") {
		e.textContent = "afficher";
	}
	else {
		e.textContent = "masquer";
	}
}
