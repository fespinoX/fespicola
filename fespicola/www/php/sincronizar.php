<?php header("Access-Control-Allow-Origin: *"); 
	include('conexion.php');
	echo syncResultados($_POST['fespiDatosSoloLocal']);
?>