<?php
/**
 *
 */
class Rectangle extends Shape{
  private $point;
  protected $width;
  protected $height;
  function __construct()
  {
    $this->point = new Point();
    $this-> width = 50;
    $this-> height = 50;
    parent::__construct();
  }
  public function afficher(){
    return "x : " . $this->point->getx() . " y : " . $this->point->gety() . " largeur: " . $this-> width . " hauteur: " . $this-> height . " couleur: " . $this-> couleur;
  }
  public function draw(){
    return '<rect x="' . $this->point->getx() . '" y="' . $this->point->gety() . '" width=" '. $this-> width .' " height=" '. $this-> height .' " fill=" '. $this-> couleur . '"fill-opacity="'.$this->opacity.'" />';

  }
  public function setSize($width,$height){
    $this -> width = $width;
    $this -> height = $height;
  }
  public function setPosition($x,$y){
    $this->point->setPosition($x,$y);
  }
}


 ?>
