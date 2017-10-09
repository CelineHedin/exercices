/*console.log("coucou");

var button = document.querySelector("#toggle-rectangle");

button.addEventListener("click", onclickbutton);

function onclickbutton(){
  var div = document.querySelector(".rectangle");
  div.classList.toggle("hide");
  if(button.textContent == "Cacher le rectangle"){
    button.textContent = "Afficher le rectangle"
  }
  else{
    button.textContent = "Cacher le rectangle"
  }
}


var rectangle = document.querySelector(".rectangle");

rectangle.addEventListener("dblclick", onDblClick);

rectangle.addEventListener("mouseover", onMouseOver);

rectangle.addEventListener("mouseout", onMouseOut);

function onDblClick(){
  rectangle.classList.toggle("good");
}

function onMouseOver(){
  rectangle.classList.add("important")
}

function onMouseOut(){
  rectangle.classList.remove("important");
  rectangle.classList.remove("good");
}


/*correction
var button = document.getElementById('toggle-rectangle');

	button.addEventListener('click', onClickButton);

	function onClickButton() {
		rectangle.classList.toggle('hide');

		if(button.textContent == "Cacher le rectangle") {
			button.textContent = "Afficher le rectangle";
		}
		else {
			button.textContent = "Cacher le rectangle";
		}
	}


	var rectangle = document.querySelector('.rectangle');

	rectangle.addEventListener('mouseover', onMouseOverRectangle);

	function onMouseOverRectangle() {
		rectangle.classList.add('important');
	}

	rectangle.addEventListener('dblclick', onDoubleClickRectangle);

	function onDoubleClickRectangle() {
		rectangle.classList.toggle('good');
	}

	rectangle.addEventListener('mouseout', onMouseOutRectangle);

	function onMouseOutRectangle() {
		rectangle.classList.remove('important');
		rectangle.classList.remove('good'); // <========
	}
*/
