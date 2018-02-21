<?php header("Access-Control-Allow-Origin: *");

	$conexion = mysqli_connect('149.56.20.84', 'ohnocoma_fespi', 'fespicola1234', 'ohnocoma_fespicola' );

	/* $enlace = mysqli_connect("127.0.0.1", "mi_usuario", "mi_contraseña", "mi_bd");  */
	
	function putResultados($nuevoResultado){ 
		global $conexion;
		$nuevoResultado = json_decode($nuevoResultado);

		$consulta = "INSERT INTO resultados SET NOMBRE = '$nuevoResultado->nombre', PUNTOS = '$nuevoResultado->puntos'";


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