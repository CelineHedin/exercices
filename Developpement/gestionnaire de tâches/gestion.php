<?php
include "functions.php";

/*function get_task() {
  $file = fopen("gestion.csv","r");
  $lines = [];
  while(true){
    $recup = fgetcsv($file);
    if($recup == false){
      break;
    }
    array_push($lines, $recup);
  }
  fclose($file);
  return $lines;
}*/

//echo date("Y-m-d");
$task = get_task();


include "gestion.phtml";
