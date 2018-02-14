<?php header("Access-Control-Allow-Origin: *");
	include('conexion.php');
	deleteResultados($_POST['idResultado']);
	echo getResultados();
?>