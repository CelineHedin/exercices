<?php
class Square{
	public $point;
	public $width;
	public $color;

	public function __construct(){
		$this->point= new Point();
		$this->width = 100;
		$this->color = "red";
	}

	public function setSize($width){
		$this->width = $width;
	}

	public function setPosition($x,$y){
		$this->point->setPosition($x,$y);
	}

	public function setColor($color){
		$this->color = $color;
	}


	public function draw(){
		return '<rect x="'.$this->point->x.
			'" y="'.$this->point->y.
			'" width="'.$this->width.
			'" height="'.$this->width.
			'" fill="'.$this->color.'"/>';
	}

	public function display(){
		return "<br><strong>Mon carré: </strong><br>".
			"position x : ".$this->point->x."px<br>".
			"positon y : ".$this->point->y."px<br>".
			"largeur : ".$this->width."px<br>".
			"Couleur : ".$this->color."<br><br>";
	}
}

 ?>
