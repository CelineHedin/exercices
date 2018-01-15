<?php

class BookingModel {
  private $database;

  public function __construct()
  {
    $this-> database =new Database();
  }
  public function bookingAll(){
    $book = $this->database->query('SELECT `BookingDate`, `BookingTime`, `NumberOfSeats` ,`User_Id` , Booking.CreationTimestamp, User.FirstName
      FROM `Booking`
      INNER JOIN User ON User.Id = Booking.User_Id');
    return $book;
  }
}
