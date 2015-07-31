<?php
 $json = array(
    array(
      'name' => 'Event1',
      'host' => 'Dubforce',
      'address' => '1 Super Lane',
      'city' => 'Jacksonville',
      'state' => "Florida",
      'zip' => '32215',
      'date' => 'July, 21 2015',
      'time' => '9:50PM'
    ),
    array(
      'name' => 'Event2',
      'host' => 'Superfly',
      'address' => '42 Moonland Street',
      'city' => 'Orlando',
      'state' => "Florida",
      'zip' => '54487',
      'date' => 'December, 1 2011',
      'time' => '3:40PM'
    )
 );

 echo json_encode($json);
