<?php
/**
 *
 */

class Polygone extends Shape{
  private $points;
  function __construct($nb_pts){
    $this->points = [];
    for($i=0;$i< $nb_pts;$i++){
      $point = new Point();

			// changer la position du point, aléatoirement
			$point->setPosition(rand(0, 800), rand(0, 800));

			array_push($this->points, $point);
    }
    parent::__construct();
  }

  public function draw(){
    $string = '';
		for($i = 0; $i < count($this->points); $i++) {
			$string .= $this->points[$i]->getx() .",". $this->points[$i]->gety()." ";
		}
    return '<polygon points="'.$string.' " fill="'.$this->couleur.'" fill-opacity="'.$this->opacity.'" />' ;
  }
  public function afficher(){
    $string = '';
    for($i = 0; $i < count($this->points); $i++) {
			$string .= $this->points[$i]->getx() .",". $this->points[$i]->gety()." ";
		}
    return "x : " . $this->point->getx() . " y : " . $this->point->gety() . " rayon x: " . $this-> rx . " rayon y : " . $this-> ry . " couleur: " . $this-> couleur;
  }
}


 ?>
