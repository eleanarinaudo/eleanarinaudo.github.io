<?php

$nombre=$_POST['name'];
$mail=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$header='From ' . $mail . "\r\n";
$header .="X-Mailer:PHP/" . phpversion(). "\r\n";
$header .="Mime-Version:1.0\r\n";
$header .="Content-Type: text/plain";



$msg= "Este mensaje fue envado por " . $nombre . ",\r\n";
$msg .= "Su email es: " . $mail . "\r\n";
$msg .= "Mensaje" . $_POST['msg'] . "\r\n";
$msg .= "Enviado el " . date('d/m/Y', time());


$from = 'eleanarinaudo@gmail.com>';

$subj = 'Mensaje de mi portafolio';

mail($para, $asunto, utf8_decode($msg),$header);
header("Location:index.html");
?>