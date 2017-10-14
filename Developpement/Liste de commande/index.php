<?php
//1ere étape : connexion
$pdo = new PDO("mysql:host=localhost;dbname=classicmodels", "root", "troiswa");

//2eme etape : encodage
$pdo->exec("SET NAMES UTF8");

//3eme etape : requete
$query = $pdo->prepare("SELECT orderNumber, orderDate, shippedDate, orders.status
FROM orders ORDER BY orderDate");

//4eme etape : executer la requete
$query->execute();

//5eme etape : recuperer resultat
$result = $query->fetchAll(PDO::FETCH_ASSOC);
//fetchAll donne un tableau de tableau associatif et fetch donne un tableau(pour les données moins lourdes).

//6eme etape : utiliser un var_dump
/*var_dump($result);*/

include "index.phtml";
