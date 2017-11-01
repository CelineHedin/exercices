<?php
include "BDD.php";

//3eme etape : requete
/*$query = $pdo->query("SELECT Id, FirstName, LastName
FROM Author
ORDER BY Id");

//Comme il n'y a pas de where dans la requete, il n'y a pas besoin de cacher ce where donc $query->execute() n'est pas indispensable. Mettre $query = $pdo->query dans la requete au lieu de $pdo->prepare et supprimer la 4eme étape

//5eme etape : recuperer resultat
$auteur = $query->fetchAll();

//6eme etape : utiliser un var_dump
//var_dump($auteur);


//3eme etape : requete
$query = $pdo->query("SELECT Id, Name
FROM Category
ORDER BY Id");

//Comme il n'y a pas de where dans la requete, il n'y a pas besoin de cacher ce where donc $query->execute() n'est pas indispensable. Mettre $query = $pdo->query dans la requete au lieu de $pdo->prepare et supprimer la 4eme étape

//5eme etape : recuperer resultat
$categorie = $query->fetchAll();

//6eme etape : utiliser un var_dump
//var_dump($categorie);

//var_dump($_POST);
*/
if(array_key_exists("titre",$_POST) == true){
  //var_dump($_POST);
  $query = $pdo->prepare("INSERT INTO Post(Title, img, Contents, CreationTimestamp, Author_Id, Category_Id)
  VALUES(?,?,?, NOW(),?,?)");

  //4eme etape : executer la requete
  $query->execute([$_POST["titre"],$_POST["image"],$_POST["article"],$_POST["auteur"],$_POST["categories"]]);

  header('Location: index.php');
  exit();
}else{
  $query = $pdo->query("SELECT Id, FirstName, LastName
  FROM Author
  ORDER BY Id");


  //5eme etape : recuperer resultat
  $auteur = $query->fetchAll();

  //6eme etape : utiliser un var_dump
  //var_dump($auteur);


  //3eme etape : requete
  $query = $pdo->query("SELECT Id, Name
  FROM Category
  ORDER BY Id");

  $categorie = $query->fetchAll();
};


$template="add_post";
include "../layout.phtml";
 ?>
