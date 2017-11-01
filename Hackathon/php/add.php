<?php

include "BDD.php";

/*var_dump($_GET);*/
$id = $_GET["id"];

// requete pour recuperer les infos que chaque fantomes
//3eme etape : requete
$query = $pdo->prepare("SELECT id,nom,prenom,date_naissance
FROM fantome
WHERE id = ?");

//4eme etape : executer la requete
$query->execute([$id]);

//5eme etape : recuperer resultat
$resultats = $query->fetch(PDO::FETCH_ASSOC);

//6eme etape : utiliser un var_dump
var_dump($resultats);



$template="add";
include "../phtml/layout.phtml";
