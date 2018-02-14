<?php header("Access-Control-Allow-Origin: *"); 
	include('conexion.php');
	echo sincronizar_bares($_POST['bares_local']);
?>