<?php
/**
 *
 */

class Triangle extends Shape{
  private $point1;
  private $point2;
  private $point3;
  function __construct()
  {
    $this->point1 = new Point();
    $this->point2 = new Point();
    $this->point3 = new Point();
    /*$this-> x1 = 0;
    $this-> y1 = 0;
    $this-> x2 = 0;
    $this-> y2 = 0;
    $this-> x3 = 0;
    $this-> y3 = 0;*/
    parent::__construct();
  }
  public function afficher(){
    return "Premier point : (" . $this->point1-> getx() . " , " . $this->point1-> gety() . " ). Deuxième point : (" . $this->point2-> getx() . " , " . $this->point2-> gety() . "). troisième point : (". $this->point3-> getx() . " , " . $this->point3-> gety() .") couleur: " . $this-> couleur;
  }
  public function draw(){
    return '<polygon points="'.$this->point1-> getx().','.$this->point1-> gety().' '.$this->point2-> getx().','.$this->point2-> gety().' '. $this->point3-> getx().','.$this->point3-> gety().'" style = fill:"'.$this->couleur.'" fill-opacity="'.$this->opacity.'" />' ;

  }
  public function setPoint($x1,$y1,$x2,$y2,$x3,$y3){
    $this->point1->setPosition($x1,$y1);
    $this->point2->setPosition($x2,$y2);
    $this->point3->setPosition($x3,$y3);
  }
  /*public function SetPoint($x1,$y1,$x2,$y2,$x3,$y3){
    $this -> x1 = $x1;
    $this -> y1 = $y1;
    $this -> x2 = $x2;
    $this -> y2 = $y2;
    $this -> x3 = $x3;
    $this -> y3 = $y3;
  }*/
}


 ?>
