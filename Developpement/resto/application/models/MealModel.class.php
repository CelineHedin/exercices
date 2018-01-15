<?php
/**
 *
 */
class MealModel{
  private $database;

  public function __construct()
  {
    $this-> database =new Database();
  }
  public function listAll(){
    $res = $this->database->query('SELECT * FROM Meal');
    return $res;
  }
  public function list(){
    $res2 = $this->database->query('SELECT *
    FROM `Meal`
    WHERE QuantityInStock<=10');
    return $res2;
  }
  public function addlist($Name, $Photo, $Description, $QuantityInStock, $BuyPrice, $SalePrice){
    $sql = "INSERT INTO Meal (
 			Name,
 			Photo,
 			Description,
 			QuantityInStock,
 			BuyPrice,
 			SalePrice
 		 ) VALUES (?, ? , ? , ? , ? , ? )";

 		$array = [
 			$Name,
      $Photo,
      $Description,
      $QuantityInStock,
      $BuyPrice,
      $SalePrice
 		];

    $this->database->executeSql($sql, $array);
  }
}


 ?>
