<?php
/**
 *
 */
class Voiture
{ public $km;
  public $marque;

  public function __construct($km)
  {
    $this->km = $km;
    $this->marque = "BMW";
  }
  public function roule(){
    $this-> km++;
    $this-> afficher();
  }
  public function afficher(){
    echo($this->km ." " . $this->marque);
  }
}

/**
 *
 */
class Maison{
  public $locataire;
  public $loyer;
  public $surface;

  public function __construct($locataire,$loyer,$surface)
  {
    $this -> locataire = $locataire;
    $this -> loyer = $loyer;
    $this -> surface = $surface;
  }
  public function afficher(){
    echo ($this->locataire ." a ". $this -> loyer . "€ de loyer pour ". $this -> surface . "m2 <br>");
  }
  public function louer($locataire){
    $this -> locataire = $locataire;
  }
  public function faire_travaux(){
    $this -> loyer+=50;
  }
  public function changer_prix($prix){
    $this-> loyer = $prix;
  }
}
