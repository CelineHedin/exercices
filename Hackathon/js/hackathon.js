'use strict'

$(()=> {


//alert("hello");

let canvas, ctx, circles;
let size = 30;

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;

  circles = [];

    circles.push({
      x: rand(50, canvas.width - 50),
      y: rand(50, canvas.height - 50),
      r: size,
      speedX: rand(-3, 3),
      speedY: rand(-3, 3),
      color: 'orange'
    });
  setInterval(loop, 16);
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(let i = 0; i < circles.length; i++) {
    update(circles[i]);
    draw(circles[i]);
  }
}

function update(e) {
  e.x += e.speedX;
  e.y += e.speedY;

  if (e.x - e.r < 0 || e.x + e.r > canvas.width) {
    e.speedX *= -1;
  }
  if (e.y - e.r < 0 || e.y + e.r > canvas.height) {
    e.speedY *= -1;
  }
}

let centrex, centrey, rayon;
function draw(e) {
centrex = e.x;
centrey = e.y;
rayon = e.r;
  ctx.fillStyle = e.color;
  ctx.beginPath();
  ctx.arc(e.x, e.y, e.r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}



function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Manipulation du DOM en JQUERY
//$('#id'), $('.class'),
//Game launched
$('#canvas').on('click', function(){
  //Give us your name
  $('#pseudo').toggle();
});


let getMousePosition = function(event){
    let mouse_x = event.pageX - canvas.offsetLeft;
    let mouse_y = event.pageY - canvas.offsetTop;

    return [mouse_x,mouse_y];
}

$('#start').on('click', function(){
    $('#pseudo').toggle();
});


window.addEventListener("click", managePos);

function managePos(event){
  let positions = getMousePosition(event);
  let posx = positions[ 0 ];
  let posy = positions[ 1 ];

    if (( posx > centrex && posx < (centrex + rayon))
    || ( posx < centrex && posx > (centrex - rayon)))
    {
      if (( posy > centrey && posy < (centrey + rayon))
      || ( posy < centrey && posy < (centrey + rayon)))
        {
          console.log("you win");
        }
    }
}

init();
});
