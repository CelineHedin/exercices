<?php

$monChiffre = 12;


if(array_key_exists('nombre', $_POST) == true){
  $nombre = $_POST["nombre"];
  if ($nombre<$monChiffre){
    $jeux = "<p>C'est +!!</p>";
  } else if($nombre>$monChiffre){
    $jeux = "<p>C'est -!!</p>";
  } else{
    $jeux = "<p>Gagné!! you are a winner!!!!</p>";
  }
} else{
  $jeux = null;
}


include "nombre.phtml";
