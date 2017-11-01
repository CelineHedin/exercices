<?php
include "connexionBDD.php";

$name = $_GET["nom"];

//1ere étape : connexion

//2eme etape : encodage

//3eme etape : requete
$query = $pdo->prepare("SELECT  productCode, productName, productDescription, MSRP, quantityInStock
FROM products
WHERE productCode = ?");

//4eme etape : executer la requete
$query->execute([$name]);

//5eme etape : recuperer resultat
$detailproduct = $query->fetch(PDO::FETCH_ASSOC);

//6eme etape : utiliser un var_dump

/*var_dump($detailproduct);*/






/*var_dump($_GET);
var_dump($id);
var_dump($coordonne);
var_dump($total);*/


include "product.phtml";
