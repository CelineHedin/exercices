<?php


$id = $_GET["id"];

//recuperation de produit, prix unitaire , prix total...
//1ere étape : connexion
$pdo = new PDO("mysql:host=localhost;dbname=classicmodels", "root", "troiswa");

//2eme etape : encodage
$pdo->exec("SET NAMES UTF8");

//3eme etape : requete
$query = $pdo->prepare("SELECT orderdetails.orderNumber, productName, priceEach, quantityOrdered, (priceEach*quantityOrdered)
AS prixTotal
FROM products
INNER JOIN orderdetails ON products.productCode= orderdetails.productCode
WHERE orderNumber = ?");

//4eme etape : executer la requete
$query->execute([$id]);

//5eme etape : recuperer resultat
$detail = $query->fetchAll(PDO::FETCH_ASSOC);

//6eme etape : utiliser un var_dump

/*var_dump($_GET);*/



//recuperation des coordonnées:
//3eme etape : requete
$query = $pdo->prepare("SELECT orders.orderNumber, customerName, contactLastName, contactFirstName, addressLine1, city
FROM customers
INNER JOIN orders ON customers.customerNumber = orders.customerNumber
WHERE orders.orderNumber = ?");

//4eme etape : executer la requete
$query->execute([$id]);

//5eme etape : recuperer resultat
$coordonne = $query->fetch(PDO::FETCH_ASSOC);

//6eme etape : utiliser un var_dump


//recuperation des coordonnées:
//3eme etape : requete
$query = $pdo->prepare("SELECT SUM(priceEach*quantityOrdered)AS montantTotal, (SUM(priceEach*quantityOrdered))*0.2 AS TVA, (SUM(priceEach*quantityOrdered) + (SUM(priceEach*quantityOrdered)*0.2)) AS TTC
FROM products
INNER JOIN orderdetails ON products.productCode= orderdetails.productCode
WHERE orderNumber = ?");

//4eme etape : executer la requete
$query->execute([$id]);

//5eme etape : recuperer resultat
$total = $query->fetch(PDO::FETCH_ASSOC);

//6eme etape : utiliser un var_dump



/*var_dump($_GET);
var_dump($id);
var_dump($coordonne);
var_dump($total);*/


include "detail.phtml";
