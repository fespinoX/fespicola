<?php header("Access-Control-Allow-Origin: *");

	$conexion = mysqli_connect('ohno.com.ar', 'fespicola', 'fespicola1234', 'fespicola' );
	
	function putResultados($fespiDatos){ 
		global $conexion;
		$fespiDatos = json_decode($fespiDatos);
		$consulta = "INSERT INTO resultados SET NOMBRE = '$fespiDatos->nombre', PUNTOS = '$fespiDatos->puntos'";	
		mysqli_query($conexion, $consulta);
	}

	function deleteResultados($id){
		global $conexion;
		$consulta = "DELETE FROM resultados WHERE ID='$id' ";
		mysqli_query($conexion, $consulta);
	}

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

	function syncResultados($resultadosLocal){
		global $conexion;
		$resultadosLocal = json_decode($resultadosLocal);
		$consulta = "TRUNCATE TABLE resultados";
		mysqli_query($conexion, $consulta);
		if(count($resultadosLocal) > 0) {
			foreach ($resultadosLocal as $resultado) {
				putResultados(json_encode($resultado));
			}			
		}
	}
?>