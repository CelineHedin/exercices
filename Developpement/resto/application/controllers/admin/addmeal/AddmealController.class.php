<?php

class AddmealController{

  public function httpGetMethod(Http $http, array $queryFields){
    return ['flashBag'=>new FlashBag()];
  }

  public function httpPostMethod(Http $http, array $formFields){
    var_dump($formFields);
    $addMeal = new MealModel();
    if($formFields['Photo']==null){
      $formFields['Photo']="no-photo.png";
    }
    $addMeal-> addlist(
      $formFields['Name'],
      $formFields['Photo'],
      $formFields['Description'],
      $formFields['QuantityInStock'],
      $formFields['BuyPrice'],
      $formFields['SalePrice']
    );
    $flashBag = new FlashBag();
    $flashBag->add("Le meal est bien enregistré ;-)");
    $http->redirectTo('/admin');
  }

}
