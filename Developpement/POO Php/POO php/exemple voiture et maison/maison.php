<?php
include "voiture.class.php";
$m1 = new Maison("M. truc", 200, 20);
$m1 -> afficher();
$m1 -> faire_travaux();
$m1 -> afficher();
$m1 -> changer_prix(500);
$m1 -> afficher();
