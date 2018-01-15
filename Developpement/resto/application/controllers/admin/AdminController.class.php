<?php
/**
 *
 */
class AdminController
{
  public function httpGetMethod(Http $http, array $queryFields)
  {
    return ['flashBag'=>new FlashBag()];

  }
}
