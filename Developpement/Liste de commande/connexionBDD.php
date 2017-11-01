<?php
//recuperation de produit, prix unitaire , prix total...
//1ere étape : connexion
$pdo = new PDO("mysql:host=localhost;dbname=classicmodels", "root", "troiswa");

//2eme etape : encodage
$pdo->exec("SET NAMES UTF8");
