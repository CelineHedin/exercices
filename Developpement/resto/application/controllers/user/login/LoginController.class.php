<?php
/**
 *
 */
 class LoginController {
 	public function httpGetMethod(Http $http, array $queryFields) {
 	}

 	public function httpPostMethod(Http $http, array $formFields) {


 		$userModel = new UserModel();
 		$bool = $userModel->login($formFields['email'], $formFields['password']);

 		if($bool) {
      $flashBag = new FlashBag();
      $flashBag->add("connexion OK!!");
      $flashBag-> add("Bienvenue");
      $http->redirectTo('/');
 		}else{
      $flashBag = new FlashBag();
      $flashBag->add("Mauvais Email ou mot de passe!!");
      $http->redirectTo('/user/login');
    }

 	}
 }
/*class LoginController
{
  public function httpGetMethod(Http $http, array $queryFields)
  {

  }
  public function httpPostMethod(Http $http, array $formFields){
    var_dump($formFields);
    $postLogin = new UserModel();
    $account2 = $postLogin-> accountAll($formFields);
    if(empty($account2)){
      $http->redirectTo('/');
    }
    else{
      $http->redirectTo('/user/login');
    }
  }

}*/

 ?>
