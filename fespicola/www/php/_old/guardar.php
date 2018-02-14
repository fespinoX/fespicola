<?php header("Access-Control-Allow-Origin: *");

	$postdata = @file_get_contents("php://input"); 
	$request = json_decode($postdata); 
	$archivo = @file_get_contents("bares_guardados.json");
	$contenido_objeto = json_decode($archivo);
	$contenido_objeto[]= $request; 
	$data = json_encode($contenido_objeto);
	file_put_contents("bares_guardados.json", $data);
	echo ($postdata);
	echo ($data);

?>


