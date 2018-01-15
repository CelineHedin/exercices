<?php

// heritage

// fichier vetement.php

class Vetement {
	public $prix;
	public $marque;
	public $couleur;

	public function __construct() {
		$this->prix = 0;
		$this->marque = "Truc";
		$this->couleur = "noir";
	}

	public function setPrix() { /*... */ }
	public function setMarque() { /*... */ }
	public function setCouleur() { /*... */ }
}

// fichier chemise.php

class Chemise extends Vetement {
	public $nombreBoutons;

	public function __construct() {
		parent::__construct();

		$this->nombreBoutons = 10;
	}

	public function setBoutons() { /*... */ }
	public function afficher() { /*... */ }
}

// fichier chaussure.php

class Chaussure extends Vetement {
	public $fermeture;

	public function __construct() {
		parent::__construct();

		$this->fermeture = "lacets";
	}

	public function afficher() { /*... */ }
	public function setFermeture() { /*... */ }
}



$c1 = new Chemise();
$c1->setPrix(42);
$c1->setMarque("truc");
$c1->afficher();
