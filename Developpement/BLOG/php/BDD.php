<?php

$t=["","../img/fauteuil-de-bureau.jpg","../img/consulting_business_russie_btp.jpg","../img/open space.jpg"];


$config = [
	'host' => 'hackathon.cfmlgkjd4t1q.eu-west-1.rds.amazonaws.com',
	'port' => 3306,
	'user' => 'hackathon',
	'password' => 'hackathon',
	'database' => 'blog',
];

$options = [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

$dsn = sprintf('mysql:host=%s:%d;dbname=%s', $config['host'], $config['port'], $config['database']);
$pdo = new PDO($dsn, $config['user'], $config['password'], $options);

$pdo->exec('SET NAMES UTF8');
