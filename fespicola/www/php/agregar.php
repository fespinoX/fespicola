<?php header("Access-Control-Allow-Origin: *"); 
	include('conexion.php');
	insertar_bares($_POST['campos_bares']);
?>