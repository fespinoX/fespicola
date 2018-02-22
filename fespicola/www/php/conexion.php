<?php header("Access-Control-Allow-Origin: *");

	$conexion = mysqli_connect('149.56.20.84', 'ohnocoma_fespi', 'fespicola1234', 'ohnocoma_fespicola' );

	/* $enlace = mysqli_connect("127.0.0.1", "mi_usuario", "mi_contraseña", "mi_bd");  */


/* agrega resultado nuevo */

	function putResultados($infoResultadoNuevo){ 
		
		global $conexion;

		$infoResultadoNuevo = json_decode($infoResultadoNuevo);

		$consulta = "INSERT INTO resultados SET NOMBRE = '$infoResultadoNuevo->nombre', PUNTOS = '$infoResultadoNuevo->puntos'";

		mysqli_query($conexion, $consulta);
	}


/* borra resultado por ID */

	function deleteResultados($id){
		global $conexion;
		$consulta = "DELETE FROM resultados WHERE ID='$id' ";
		mysqli_query($conexion, $consulta);
	}


/* levanta resultados */

	function getResultados(){
		global $conexion;

		$consulta = "SELECT * FROM resultados ORDER BY ID ASC";
		$allResultados = mysqli_query($conexion, $consulta);	

		$return = array();
		
		while($m_resultados = mysqli_fetch_assoc($allResultados)){
			$resultado = [];
			$resultado['id'] = $m_resultados['ID'];
			$resultado['nombre'] = $m_resultados['NOMBRE'];
			$resultado['puntos'] = $m_resultados['PUNTOS'];
			
			$return[] = $resultado;
		}

		$return = json_encode($return);
		return $return;	
	}


/* actualiza la base con lo que levanta del localhost */

	function syncResultados($fespiDatosSoloLocal){
		
		$fespiDatosSoloLocal = json_decode($fespiDatosSoloLocal);

		if(count($fespiDatosSoloLocal) > 0) {
			foreach ($fespiDatosSoloLocal as $resultado) {
				putResultados(json_encode($resultado));
			}		
		}

	} 
?>