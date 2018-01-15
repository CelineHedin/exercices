<?php
/**
 *
 */
class Renderer {
  private $width;
  private $height;
  private $shapes;
  function __construct(int $width, int $height){
    $this->width = $width;
    $this->height = $height;
    $this->shapes = [];
  }
  public function add(Shape $shape){
    array_push($this->shapes,$shape);
  }
  public function display(){
    $string = '';
    foreach ($this->shapes as $shape) {

      $string .= '<p>' .$shape->afficher(). '</p>' ;
    }
    return $string;
  }
  public function draw(){
    $string = '';
    foreach ($this->shapes as $shape) {
      $string .= $shape->draw() ;
    }

    return '<svg width="'.$this->width.'" height="'.$this->height.'" >"'. $string .'"</svg>';
  }
}
