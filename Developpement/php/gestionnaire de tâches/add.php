<?php
include "functions.php";

$titre = null;
$tache = null;
$date = null;
$priorite = null;

/*function save_task($array) {
	$file = fopen("gestion.csv","a");
  $lire = fputcsv($file,$array);
  fclose($file);
}*/

if(array_key_exists('titre', $_POST)){
  $titre = $_POST["titre"];
  $tache = $_POST["tache"];
  $date = $_POST["endDate"];
  $priorite = $_POST["priority"];
  save_task([$titre,$tache,$date,$priorite]);
}

header("Location: gestion.php");
exit();
