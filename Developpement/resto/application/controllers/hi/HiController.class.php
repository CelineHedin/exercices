<?php

// le nom de la classe doit etre le meme que le nom du repertoire et fichier
class HiController {
	// methode appellé quand on veux afficher la page
    public function httpGetMethod(Http $http, array $queryFields) {
    	// pour transmettre des variable au phtml, il faut retourner un tableau associatif
    	// la clef = le nom de la variable
    	// la valeur = la valeur de la variable
    	// dans ce cas, dans le phtml, on aura $prenom = 'John' et $nom = 'Doe'
        $age=31;
        return [ 'prenom' => 'Celine', 'nom' => 'Hedin', 'age'=>$age ];
    }

    // methode appellé quand on envoie un formulaire POST à la page
    public function httpPostMethod(Http $http, array $formFields) {

    }
}
