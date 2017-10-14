<?php

/*function traduction($mot){
  if($mot == "chat"){
    $anglais = "cat";
  }
  else if($mot == "chien"){
    $anglais = "dog";
  }
  else{
    $anglais = "pas disponible!!";
  }
  return $anglais;
};*/



/*echo var_dump($dico);*/




function traduction($mot, $langBis){
  /*echo $dico["chat"];*/
  $dico = [
    "chat" => "cat",
    "chien" => "dog",
    "signe" => "sign",
    "soleil" => "sun",
  ];

  if($langBis == 'en'){
    $dico = array_flip($dico);
  }
  if(array_key_exists($mot, $dico)){
    $message = $dico[$mot];
  }
  else{
    $message = "non disponible";
  }
  return $message;

  /*switch ($mot){
    case "chat":
      $anglais = "cat";
      break;

    case "chien":
      $anglais = "dog";
      break;

    case "signe":
      $anglais = "sign";
      break;

    case "soleil":
      $anglais = "sun";
      break;

    default ;
     $anglais = "pas disponible!!";
  }
  return $anglais;*/
};



if(array_key_exists('frenchword', $_POST) == true){
  $french = strtolower($_POST["frenchword"]);
  $lang = $_POST["lang"];
  $resultat = traduction($french,$lang);
}
else{
  $resultat = null;
};

include "trad.phtml";
