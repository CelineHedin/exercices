<?php
//var_dump($_GET);


include "BDD.php";



if(!empty($_POST["titre"])){
  $querys = $pdo->prepare("UPDATE Post
  SET Title = ?, img = ?, Contents = ?
  WHERE id=?");

  //4eme etape : executer la requete
  $querys->execute([$_POST["titre"],$_POST["image"],$_POST["article"],$_POST["Id"]]);

  header("location: admin.php");
}else{
  $index=$_GET["id"];
  //var_dump($index);
  $querys = $pdo->prepare("SELECT Id, Title, img, Contents
  FROM Post
  WHERE id=?");

  //4eme etape : executer la requete
  $querys->execute([$index]);

  //5eme etape : recuperer resultat
  $comments = $querys->fetch();

  //var_dump($comments);
  //var_dump($_POST);
  $template="edit_post";
  include "../layout.phtml";
}
