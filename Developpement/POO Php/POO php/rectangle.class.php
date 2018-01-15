<?php
/**
 *
 */
class Rectangle{
  public $x;
  public $y;
  public $width;
  public $height;
  public $couleur;
  function __construct()
  {
    $this-> x = 0;
    $this-> y = 0;
    $this-> width = 50;
    $this-> height = 50;
    $this-> couleur = "black";
  }
  public function afficher(){
    echo ($this-> x. " ". $this-> y." ".$this-> width." ".$this-> height." ".$this-> couleur)
  }
  public function setSize($x,$y){
    $this -> x = $x;
    $this -> y = $y;
  }
  public function setPosition($width,$height){
    $this -> width = $width;
    $this -> height = $height;
  }
  public function setColor($couleur){
    $this-> couleur = $couleur;
  }

}


 ?>
