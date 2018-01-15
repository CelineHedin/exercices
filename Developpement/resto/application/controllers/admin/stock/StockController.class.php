<?php
class StockController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
  	 $mealModel = new MealModel();
	   $meals = $mealModel->list();

     return ['meals'=>$meals];
   }
}
