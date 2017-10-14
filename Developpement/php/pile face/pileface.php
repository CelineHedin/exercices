<?php
if(rand(0,1)<0.5){
  $resultat = "pile";
}
else{
  $resultat = "face";
}

include "pileface.phtml";
