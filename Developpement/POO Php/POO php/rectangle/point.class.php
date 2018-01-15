<?php
/**
 *
 */
class Point{
  private $x;
  private $y;
  function __construct()
  {
    $this-> x = 200;
    $this-> y = 200;
  }

  public function setPosition($x,$y){
    if($x < 0){
      $x = 0;
    }
    if($y <0){
      $y = 0;
    }
    $this -> x = $x;
    $this -> y = $y;
  }
  public function display($x,$y){
    return "x = ".$this -> x." y = ".$this -> y;
  }
  public function getx(){
    return $this->x;
  }
  public function gety(){
    return $this->y;
  }
}


 ?>
