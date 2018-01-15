<?php
include "BDD.php";

//3eme etape : requete
$querys = $pdo->prepare("SELECT id, pseudo, score, `date`
FROM fantome
ORDER BY pseudo");

//4eme etape : executer la requete
$querys->execute();

//5eme etape : recuperer resultat
$admin = $querys->fetchAll(PDO::FETCH_ASSOC);

//var_dump($admin);

$template="admin";
include "../phtml/layout.phtml";
