"use strict";

var meFormTop= $("form").offset().top;
console.log('le form et a '+ meFormTop +"px du haut de l'ecran" );



function meChangeClass(){
  //$('h1').fadeOut(3000); pour faire disparetre notre titre
  if ($(window).scrollTop()>meFormTop+ 62) {
    //$('h2').fadeOut(3000);
    $('form').addClass('is-fixed')
  }
  else {
    //$('h2').show();
    $('form').removeClass('is-fixed')
  }
}

$(window).scroll(function(){
  meChangeClass();
})
