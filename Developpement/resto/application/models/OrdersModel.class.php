<?php

class OrdersModel {
  private $database;

  public function __construct()
  {
    $this-> database =new Database();
  }
  public function listAll(){
    $orders = $this->database->query('SELECT `Order`.Id, `Order`.CreationTimestamp, TotalAmount, User.LastName FROM `Order` INNER JOIN User on `Order`.User_Id = User.Id');
    return $orders;
  }
}
