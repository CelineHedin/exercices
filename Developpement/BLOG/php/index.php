<?php

include "BDD.php";


//3eme etape : requete
$query = $pdo->query("SELECT Title, img, Post.Id, Contents, CreationTimestamp, FirstName, LastName, Name
FROM Post
INNER JOIN Author ON Post.Author_Id = Author.Id
INNER JOIN Category ON Post.Category_Id = Category.Id
ORDER BY Post.Id DESC");

//Comme il n'y a pas de where dans la requete, il n'y a pas besoin de cacher ce where donc $query->execute() n'est pas indispensable. Mettre $query = $pdo->query dans la requete au lieu de $pdo->prepare et supprimer la 4eme étape

//5eme etape : recuperer resultat
$details = $query->fetchAll();

//6eme etape : utiliser un var_dump

//var_dump($details);
//var_dump(substr($details[0]["Contents"],0,20)); pour ecrire les 20 premiers mots de la phrase




$template="index";
include "../layout.phtml";
