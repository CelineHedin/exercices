<?php
//phpinfo();exit;
include "php/BDD.php";

//3eme etape : requete
$query = $pdo->prepare("SELECT id, nom, prenom, date_naissance
FROM fantome
ORDER BY id");

//4eme etape : executer la requete
$query->execute();

//5eme etape : recuperer resultat
$results = $query->fetchAll(PDO::FETCH_ASSOC);

//6eme etape : utiliser un var_dump
var_dump($results);

$template="index";
include "phtml/layout.phtml";
