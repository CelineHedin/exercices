<?php

include "functions.php";
/*function delete_tasks() {
$file = fopen("gestion.csv","w");
fclose($file);
}*/
delete_tasks();

header("Location: gestion.php");
exit();
