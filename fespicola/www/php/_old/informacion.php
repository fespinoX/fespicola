<?php header("Access-Control-Allow-Origin: *");
	$file = @file_get_contents("bares_guardados.json");
	print_r($file);
?>