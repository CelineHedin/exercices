<?php
const DATAFILE="gestion.csv";

function get_task() {
  $file = fopen(DATAFILE, "r");
  $lines = [];
  while(true){
    $recup = fgetcsv($file);
    if($recup == false){
      break;
    }
    array_push($lines, $recup);
  }
  fclose($file);

  return $lines;
}

function save_task($array) {
	$file = fopen(DATAFILE, "a");
  fputcsv($file, $array);
  fclose($file);
}

function delete_tasks() {
  $file = fopen(DATAFILE, "w");
  fclose($file);
}
