<?php
//var_dump($_GET);

  include "BDD.php";


if(!empty($_POST["pseudo"])){
  $querys = $pdo->prepare("UPDATE fantome
  SET pseudo = ?
  WHERE id=?");

  //4eme etape : executer la requete
  $querys->execute([$_POST["pseudo"], $_POST["id"]]);

  header("location: ../php/admin.php");
}else{
  $index=$_GET["id"];
  //var_dump($index);


  //3eme etape : requete
  $querys = $pdo->prepare("SELECT id, pseudo
  FROM fantome
  WHERE id=?");

  //4eme etape : executer la requete
  $querys->execute([$index]);

  //5eme etape : recuperer resultat
  $admin = $querys->fetch();

  var_dump($admin);



  /*$querys = $pdo->prepare("SELECT Id, Title, img, Contents
  FROM Post
  WHERE id=?");

  //4eme etape : executer la requete
  $querys->execute([$index]);

  //5eme etape : recuperer resultat
  $comments = $querys->fetch();*/

  //var_dump($comments);
  //var_dump($_POST);
  $template="edit_post";
  include "../phtml/layout.phtml";
}
