<?php header("Access-Control-Allow-Origin: *"); 

	include('conexion.php');
	putResultados($_POST['infoResultadoNuevo']);

?>