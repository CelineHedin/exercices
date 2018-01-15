<?php
/**
 *
 */

class Ellipse extends Shape{
  private $point;
  protected $rx;
  protected $ry;
  public function __construct()
  {
    $this->point = new Point();
    $this->rx = 50;
    $this->ry = 50;
    parent::__construct();
  }
  public function afficher(){
    return "x : " . $this->point->getx() . " y : " . $this->point->gety() . " rayon x: " . $this-> rx . " rayon y : " . $this-> ry . " couleur: " . $this-> couleur;
  }
  public function draw(){
    return '<ellipse cx="'.$this->point->getx().
    '" cy="'.$this->point->gety().
    '" rx="'.$this-> rx.
    '" ry="'.$this-> ry.
    '"style="fill='.$this-> couleur.
    '"fill-opacity="'.$this->opacity.'" />';
  }
  public function setSize($x,$y){
    $this->point->setPosition($x,$y);
  }
  public function setPosition($rx,$ry){
    $this -> rx = $rx;
    $this -> ry = $ry;
  }
}


 ?>
