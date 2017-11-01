<?php

//var_dump($_POST);

include "BDD.php";

/*$nom = $_POST["Nom"];
$comments = $_POST["comments"];*/
$id = $_POST["post_id"];

//3eme etape : requete
$query = $pdo->prepare("INSERT INTO Comment(NickName, Contents, CreationTimestamp, Post_Id)
VALUES(?,?, NOW(), ?)");

//4eme etape : executer la requete
$query->execute([$_POST["Nom"],$_POST["comments"],$_POST["post_id"]]);

header('Location: show_post.php?id='.$id);
exit();
