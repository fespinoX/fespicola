<?php header("Access-Control-Allow-Origin: *");

	$conexion = mysqli_connect('florenciasepulveda.com', 'crawler', 'crawler1234', 'crawler_app' );
	
	function insertar_bares($nuevoBar){ 
		global $conexion;
		$nuevoBar = json_decode($nuevoBar);
		$categoria_tipo = $nuevoBar->tipo->cat;
		$consulta = "INSERT INTO bares SET NOMBRE = '$nuevoBar->nombre', DIRECCION = '$nuevoBar->direccion', BARRIO = '$nuevoBar->barrio', TIPO_DE_COMIDA = '$nuevoBar->comida', CATEGORIA = '$categoria_tipo'";	
		mysqli_query($conexion, $consulta);
	}

	function borrar_bares($id){
		global $conexion;
		$consulta = "DELETE FROM bares WHERE ID='$id' ";
		mysqli_query($conexion, $consulta);
	}

	function get_bares(){
		global $conexion;
		$consulta = "SELECT * FROM bares ORDER BY ID ASC";
		$lista_bares = mysqli_query($conexion, $consulta);		
		$return = array();
		
		while($m_bares = mysqli_fetch_assoc($lista_bares)){
			$bar = [];
			$bar['id'] = $m_bares['ID'];
			$bar['nombre'] = $m_bares['NOMBRE'];
			$bar['direccion'] = $m_bares['DIRECCION'];
			$bar['comida'] = $m_bares['TIPO_DE_COMIDA'];
			$bar['tipo'] = [];
			$bar['tipo']['cat'] = $m_bares['CATEGORIA'];
			$bar['barrio'] = $m_bares['BARRIO'];
			
			$return[] = $bar;
		}

		$return = json_encode($return);
		return $return;	
	}

	function sincronizar_bares($bares_local){
		global $conexion;
		$bares_local = json_decode($bares_local);
		$consulta = "TRUNCATE TABLE bares";
		mysqli_query($conexion, $consulta);
		if(count($bares_local) > 0) {
			foreach ($bares_local as $bar) {
				insertar_bares(json_encode($bar));
			}			
		}
	}
?>