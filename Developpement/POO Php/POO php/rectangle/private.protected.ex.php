<?php

// encapsulation

class Personne {
	public $prenom;
	protected $solde;
	
	public function __construct($prenom) {
		$this->prenom = $prenom;
		$this->solde = 1000;
	}
	
	public function retirer($montant) {
		if(is_numeric($montant) && $montant <= $this->solde && $montant > 0) {
			$this->solde -= $montant;
		}
	}
	
	public function getSolde() {
		return $this->solde;
	}
}



class Enfant extends Personne {

	public function retirer($montant) {
		if(is_numeric($montant) && $montant <= $this->solde && $montant > 0 && $montant <= 20) {
			$this->solde -= $montant;
		}
	}

}






// index.php

$p1 = new Personne("Bob");
$p1->retirer(100);

//$p1->solde = 10000000000;

echo $p1->getSolde();
