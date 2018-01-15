<?php

class OrdersController{
  
  public function httpGetMethod(Http $http, array $queryFields){
    $orderModel = new OrdersModel();
    $orders = $orderModel->listAll();
    return ['orders'=>$orders];
  }

  public function httpPostMethod(Http $http, array $formFields){

  }

}
