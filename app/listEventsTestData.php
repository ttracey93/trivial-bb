<?php
 $json = array(
    array(
      'name' => 'Event1',
      'city' => 'Jacksonville',
      'state' => "Florida"
    ),
    array(
      'name' => 'Event2',
      'city' => 'Orlando',
      'state' => "Florida"
    )
 );

 echo json_encode($json);
