<?php
   // data sent in header are in JSON format
   header('Content-Type: application/json');

   $_POST = json_decode(file_get_contents('php://input'), TRUE);

   // takes the value from variables and Post the data
   $name = $_POST['nom'];
   $email = $_POST['email'];
   $postmessage = nl2br($_POST['pregaria']);
   $to = "pregaries@pregaries.bonanova.cat";
   $subject = "Nova pregaria enviada de la app PREGRARIES";

   // Email Template
   $message = "<b>Nom : </b>". $name ."<br>";
   $message .= "<b>Email : </b>".$email."<br><hr><br><br>";
   $message .= $postmessage."<br>";

   $header = "From:"+$email+" \r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";

   $retval = mail ($to,$subject,$message,$header);
   // message Notification
   if( $retval == true ) {
      echo json_encode(array(
         'success'=> true,
         'message' => 'Message sent successfully'
      ));
   }else {
      echo json_encode(array(
         'error'=> true,
         'message' => 'Error sending message'
      ));
   }
?>
