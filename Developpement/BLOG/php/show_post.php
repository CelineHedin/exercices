<?php

include "BDD.php";

if(empty($_GET["id"])){
  header('Location:index.php');
  exit();
}

//var_dump($_GET);
$index=$_GET["id"];//hyper important!!!! recupère l'Id de l'url dans index.phtml
//var_dump($index);

//3eme etape : requete
$query = $pdo->prepare("SELECT Title, Post.Id, img, Contents, CreationTimestamp, FirstName, LastName, Name
FROM Post
INNER JOIN Author ON Post.Author_Id = Author.Id
INNER JOIN Category ON Post.Category_Id = Category.Id
WHERE Post.Id=?");

//4eme etape : executer la requete
$query->execute([$index]);

//5eme etape : recuperer resultat
$articles = $query->fetch();

if($articles == null){
  header("Location: index.php");
  exit();
};

//6eme etape : utiliser un var_dump
//var_dump($articles);



$querys = $pdo->prepare("SELECT NickName, Contents, CreationTimestamp, Post_Id
FROM Comment
WHERE Post_Id=?");

//4eme etape : executer la requete
$querys->execute([$index]);

//5eme etape : recuperer resultat
$comments = $querys->fetchAll();

//6eme etape : utiliser un var_dump
//var_dump($comments);


$template="show_post";
include "../layout.phtml";
