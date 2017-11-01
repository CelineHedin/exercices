<?php
include "BDD.php";

//3eme etape : requete
$querys = $pdo->prepare("SELECT Title, Post.Id
FROM Post
ORDER BY Post.Id");

//4eme etape : executer la requete
$querys->execute();

//5eme etape : recuperer resultat
$admin = $querys->fetchAll();

//var_dump($admin);

$template="admin";
include "../layout.phtml";
