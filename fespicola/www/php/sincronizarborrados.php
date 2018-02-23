<?php header("Access-Control-Allow-Origin: *"); 
	include('conexion.php');
	echo syncDeletedResultados($_POST['fespiDatosAborrar']);
?>