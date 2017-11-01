<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare('
	SELECT orderNumber, orderDate, shippedDate, status
    FROM orders
    ORDER BY orderDate
    LIMIT 5
');

$query->execute();
$orders = $query->fetchAll(PDO::FETCH_ASSOC);

include 'sql.phtml';
