<?php
include "shape.php";
include "point.class.php";
include "rectangle.class.php";
include "ellipse.class.php";
include "triangle.class.php";
include "rond.class.php";
include "carre.class.php";
include "polygone.php";
include "renderer.php";

$rect1 = new Rectangle();
$rect1 ->setSize(200,300);
$rect1 ->setPosition(20,20);
$rect1 ->setColor("red");
$rect1-> setOpacity(0.5);

$rect2 = new Rectangle();
$rect2 ->setSize(50,40);
$rect2 ->setPosition(500,250);
$rect2 ->setColor("green");
$rect2-> setOpacity(0.7);

$rect3 = new Rectangle();
$rect3 ->setSize(50,40);
$rect3 ->setPosition(260,250);
$rect3 ->setColor("purple");
$rect3-> setOpacity(0.3);

$elli1 = new Ellipse();
$elli1->setSize(150,150);
$elli1->setPosition(50,100);
$elli1->setColor("grey");
$elli1-> setOpacity(0.5);

$tri = new Triangle();
$tri->setPoint(400,200,600,400,200,400);
$tri->setColor("grey");
$tri -> setOpacity(0.2);

$circ = new Circle();
$circ -> setPosition(100);
$circ -> setSize(400,150);
$circ -> setColor("purple");

$carre = new Square();
$carre -> setSize(50);
$carre -> setPosition(500,50);
$carre -> setColor("grey");

$poly = new Polygone(100);
$poly-> draw();
$poly -> setOpacity(0.2);

$renderer = new Renderer (800,600);
$renderer->add($rect1);
$renderer->add($rect2);
$renderer->add($rect3);
$renderer->add($elli1);
$renderer->add($tri);
$renderer->add($circ);
$renderer->add($carre);
$renderer->display();
$renderer->draw();
//$renderer->draw();

include "index.phtml";
