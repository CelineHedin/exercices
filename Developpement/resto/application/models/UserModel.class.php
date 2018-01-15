<?php
/**
 *
 */
 class UserModel {
 	private $database;

 	public function __construct() {
 		$this->database = new Database();
 	}
  // prend 1 param : un mot de passe
   // retourne le mot de passe hashé (= encrypté)
   private function hashPassword($password) {
       // doc : php.net/manual/fr/faq.passwords.php
       $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

       return crypt($password, $salt);
   }

   // prend 2 param : un mot de passe en claire et un mot de passe hashé
   // retourne true si c'est le meme mot de passe
   private function verifyPassword($password, $hashedPassword) {
       return crypt($password, $hashedPassword) == $hashedPassword;
   }
  /*public function accountAll($formField){
    $account = $this->database->query('SELECT Email, Password FROM User WHERE Email= ? AND Password = ?',[$formField['email'],$formField['password']]);
    return $account;
  }*/
  public function login($email, $password) {

		$sql = "SELECT Password
				FROM User
				WHERE Email = ?";

    $array = [ $email];

		$user = $this->database->queryOne($sql, $array);

    return $this->verifyPassword($password,$user['Password']);
    
	}

 	public function signup(
                          $lastName,
                          $firstName,
                          $email,
                          $password,
                          $birthDate,
                          $address,
                          $city,
                          $zipCode,
                          $phone) {

    $cryptPassword= $this-> hashPassword($password);

 		$sql = "INSERT INTO User (
 			LastName,
 			FirstName,
 			Email,
 			Password,
 			BirthDate,
 			CreationTimestamp,
 			Address,
 			City,
 			ZipCode,
 			Phone
 		 ) VALUES (?, ? , ? , ? , ? , NOW(), ?, ? , ?, ?)";

 		$array = [
 			$lastName,
             $firstName,
             $email,
             $cryptPassword,
             $birthDate,
             $address,
             $city,
             $zipCode,
             $phone
 		];

 		$this->database->executeSql($sql, $array);

 	}

 }
/*class UserModel{
  private $database;

  public function __construct()
  {
    $this->database =new Database();
  }
  public function save($formFields){
    $this->database->executeSql('INSERT INTO User(LastName,FirstName, BirthDate, Address, City, ZipCode, Phone, Email, Password,CreationTimestamp) VALUES(?,?,?,?,?,?,?,?,?,NOW())',[$formFields['lastName'],$formFields['firstName'],$formFields['birthYear'].'-'.$formFields['birthMonth'].'-'.$formFields['birthDay'],$formFields['address'],$formFields['city'],$formFields['zipCode'],$formFields['phone'],$formFields['email'],$formFields['password']]);
  }

}*/
