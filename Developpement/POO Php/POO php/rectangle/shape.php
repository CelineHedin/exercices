<?php

/**
 *
 */
abstract class Shape{
  protected $couleur;
  protected $opacity;
  abstract public function draw();
  abstract public function afficher();
  public function __construct(){
    $this->couleur = "black";
    $this->opacity = 1;
  }
    public function setColor($couleur){
      $this-> couleur = $couleur;
    }
    public function setOpacity($opacity){
      $this-> opacity = $opacity;
    }
}

class Renderer
{
  private $shape;

  public function __construct(Shape $shape)
  {
    $this->shape = $shape;
  }

  public function toto()
  {
    $this->shape->draw();
  }
}

$ellipse = new Ellipse();
$renderer = new Renderer($ellipse);
