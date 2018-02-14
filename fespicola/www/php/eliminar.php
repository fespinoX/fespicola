<?php header("Access-Control-Allow-Origin: *");
	include('conexion.php');
	borrar_bares($_POST['id_bar']);
	echo get_bares();
?>