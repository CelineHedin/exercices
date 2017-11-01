<?php

include "BDD.php";


// requet pour envoyer un nouveau fantome dans BDD

//var_dump($_POST["nom"]);
//var_dump($_POST["date"]);

//3eme etape : requete
$query = $pdo->prepare("INSERT INTO fantome(nom,prenom,date_naissance)
VALUES(?,?,?)");

//4eme etape : executer la requete
$query->execute([$_POST["nom"],$_POST["prenom"],$_POST["date"]]);


header('Location: /hackathon/index.php');
exit();

/*$template="add";
include "../phtml/layout.phtml";*/
