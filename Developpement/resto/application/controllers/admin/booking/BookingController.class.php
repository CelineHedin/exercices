<?php
/**
 *
 */
class BookingController
{
  public function httpGetMethod(Http $http, array $queryFields){
    $boo = new BookingModel();
    $booking = $boo->bookingAll();
    return['booking'=>$booking];
  }

}


 ?>
