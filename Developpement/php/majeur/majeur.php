<?php

if(array_key_exists('age', $_POST) == true) {
	// ici, $_POST["age"] existe, car le formulaire a été envoyé
  $age = $_POST["age"];
  $nom = $_POST["nom"];
  $prenom = $_POST["prenom"];
  if($age<18){
    $reponse = "mineur";
  }
  else{
    $reponse = "majeur";
  };
}
else {
	// ici, $_POST["age"] n'existe pas, car le formulaire na pas été envoyé
  echo "<p>il faut répondre au formulaire!</p>";
};
