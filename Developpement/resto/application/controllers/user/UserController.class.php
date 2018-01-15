<?php
class UserController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {

    }
    public function httpPostMethod(Http $http, array $formFields) {

		$birthday = $formFields['birthYear'].'-'.$formFields['birthMonth'].'-'.$formFields['birthDay'];


    		$userModel = new UserModel();
    		$userModel->signup(
    				$formFields['lastName'],
    				$formFields['firstName'],
    				$formFields['email'],
    				$formFields['password'],
    				$birthday,
    				$formFields['address'],
    				$formFields['city'],
    				$formFields['zipCode'],
    				$formFields['phone']
    		);
            $flashBag = new FlashBag();
            $flashBag->add("Votre compte est bien enregistré ;-)");
            $http->redirectTo('/');
	}
    /*public function httpPostMethod(Http $http, array $formFields)
    {
      var_dump($formFields['lastName']);
      var_dump($formFields);
      $postForm = new UserModel();
      $postForm->save($formFields);

    }*/
}

 ?>
