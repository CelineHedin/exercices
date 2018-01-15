<?php

$index = $_GET["id"];
//var_dump($index);

include "BDD.php";

if(empty($index) || !ctype_digit($index)){
  header('Location: ../index.php');
  exit();
}else{
  $query = $pdo->prepare("DELETE FROM fantome
  WHERE id=?");

  //4eme etape : executer la requete
  $query->execute([$index]);

  //5eme etape : recuperer resultat


  //6eme etape : utiliser un var_dump

  header('Location: ../php/admin.php');
  exit();
}

//3eme etape : requete



 ?>
