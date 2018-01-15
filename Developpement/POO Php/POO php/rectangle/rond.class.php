<?php

class Circle extends Ellipse{


	/*public function __construct(){
		parent::__construct();
	}
*///si le constructeur de circle ne fait que appeler ellipse, sans autres attributs alors inutile d'appeler le constructeur

	public function setPosition($r, $toto=0){
    //$toto est un parametre obsionnelle parce que le parent ellipse a la meme fonction mais avec 2 attributs. or rond n'a besoin que d'un attribut.
    $this->r = $r;
	}

}
