var fespi = angular.module('fespicola', [
  'ngRoute',
  'mobile-angular-ui',
  'ngInput'
  ]);

fespi.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl:        'views/home.html', 
        controller:         'guardarController',
        reloadOnSearch:     false,
    });

    $routeProvider.when('/mostrar', {
        templateUrl:        'views/mostrar.html', 
        controller:         'resultadosController', 
        reloadOnSearch:     false,
	});

    $routeProvider.when('/cartitas', {
        templateUrl:        'views/cartitas.html', 
        controller:         'cartitas', 
        reloadOnSearch:     false,
	});

     $routeProvider.when('/datitos', {
        templateUrl:        'views/datitos.html', 
        reloadOnSearch:     false,
	});

 	$routeProvider.otherwise({
        redirectTo:         '/'
    });
});


fespi.controller('cartitas', function ($scope, $http) {
    $http.get("http://ohno.com.ar/fespicola/cartitas.php")
        
        .then( function bien(pong){
			localStorage.setItem("cartitas", angular.toJson(pong.data));
			$scope.levantaCartitas = angular.fromJson(pong.data);
            console.log("Levanta todo bien! YAY!");
		}, function error(pong){
			$scope.cartitasLS = localStorage.getItem("cartitas");
			if ($scope.cartitasLS != "undefinded" && $scope.cartitasLS != null) {
				$scope.infoLS = JSON.parse($scope.cartitasLS);
                console.log("Uy! No hay internet!.");

			} else {
				$scope.todoMal = "No se pudieron encontrar las cartitas :(";
                $scope.levantaError = true;

			}
		});
})



fespi.controller("guardarController", function ($scope, $http, $location) {
	
    $scope.si = true;
    
    $scope.guardar = function(infoResultadoNuevo){
    

/* se hace el cálculo mágico de los puntajes */

    $campos     = infoResultadoNuevo.campos;
    $pastos     = infoResultadoNuevo.pastos;
    $granos     = infoResultadoNuevo.granos;
    $vegetales  = infoResultadoNuevo.vegetales;
    $ovejas     = infoResultadoNuevo.ovejas;
    $chanchos   = infoResultadoNuevo.chanchos;
    $ganado     = infoResultadoNuevo.ganado;
    $tierra     = infoResultadoNuevo.tierra;
    $vallados   = infoResultadoNuevo.vallados;
    $choza      = infoResultadoNuevo.choza;
    $casa       = infoResultadoNuevo.casa;
    $familia    = infoResultadoNuevo.familia;
    $puntos     = infoResultadoNuevo.puntos;
    $bonus      = infoResultadoNuevo.bonus;
    

    if ($campos <= 1){
        $scope.camposPuntaje = -1;
    }else if($campos == 2){
        $scope.camposPuntaje = 1;
    }else if($campos == 3){
        $scope.camposPuntaje = 2;
    }else if($campos == 4){
        $scope.camposPuntaje = 3;
    }else{
        $scope.camposPuntaje = 4;
    }
        
    switch($pastos) {
    case 0:
        $scope.pastosPuntaje = -1
        break;
    case 1:
        $scope.pastosPuntaje = 1
        break;
    case 2:
        $scope.pastosPuntaje = 2
        break;
    case 3:
        $scope.pastosPuntaje = 3
        break;
    default:
        $scope.pastosPuntaje = 4
}
            
        switch($granos) {
    case 0:
        $scope.granosPuntaje = -1
        break;
    case 1:
        $scope.granosPuntaje = 1
        break;
    case 2:
        $scope.granosPuntaje = 1
        break;
    case 3:
        $scope.granosPuntaje = 1
        break;
    case 4:
        $scope.granosPuntaje = 2
        break;
    case 5:
        $scope.granosPuntaje = 2
        break;
    case 6:
        $scope.granosPuntaje = 3
        break;
    case 7:
        $scope.granosPuntaje = 3
        break;
    default:
        $scope.granosPuntaje = 4
}
    
    
        switch($vegetales) {
    case 0:
        $scope.vegetalesPuntaje = -1
        break;
    case 1:
        $scope.vegetalesPuntaje = 1
        break;
    case 2:
        $scope.vegetalesPuntaje = 2
        break;
    case 3:
        $scope.vegetalesPuntaje = 3
        break;
    default:
        $scope.vegetalesPuntaje = 4
}
    
    
        switch($ovejas) {
    case 0:
        $scope.ovejasPuntaje = -1
        break;
    case 1:
        $scope.ovejasPuntaje = 1
        break;
    case 2:
        $scope.ovejasPuntaje = 1
        break;
    case 3:
        $scope.ovejasPuntaje = 1
        break;
    case 4:
        $scope.ovejasPuntaje = 2
        break;
    case 5:
        $scope.ovejasPuntaje = 2
        break;
    case 6:
        $scope.ovejasPuntaje = 3
        break;
    case 7:
        $scope.ovejasPuntaje = 3
        break;
    default:
        $scope.ovejasPuntaje = 4
}

    
        switch($chanchos) {
    case 0:
        $scope.chanchosPuntaje = -1
        break;
    case 1:
        $scope.chanchosPuntaje = 1
        break;
    case 2:
        $scope.chanchosPuntaje = 1
        break;
    case 3:
        $scope.chanchosPuntaje = 2
        break;
    case 4:
        $scope.chanchosPuntaje = 2
        break;
    case 5:
        $scope.chanchosPuntaje = 3
        break;
    case 6:
        $scope.chanchosPuntaje = 3
        break;
    default:
        $scope.chanchosPuntaje = 4
}

    
        switch($ganado) {
    case 0:
        $scope.ganadoPuntaje = -1
        break;
    case 1:
        $scope.ganadoPuntaje = 1
        break;
    case 2:
        $scope.ganadoPuntaje = 2
        break;
    case 3:
        $scope.ganadoPuntaje = 2
        break;
    case 4:
        $scope.ganadoPuntaje = 3
        break;
    case 5:
        $scope.ganadoPuntaje = 3
        break;
    default:
        $scope.ganadoPuntaje = 4
}

    
$scope.tierraPuntaje = $tierra * -1;
$scope.valladosPuntaje = $vallados * 1;
$scope.chozaPuntaje = $choza * 1;
$scope.casaPuntaje = $casa * 2;
$scope.familiaPuntaje = $familia * 3;
$scope.puntosPuntaje = $puntos * 1;
$scope.bonusPuntaje = $bonus * 1;   
    
$scope.totalPuntaje =  $scope.camposPuntaje + $scope.pastosPuntaje + $scope.granosPuntaje + $scope.vegetalesPuntaje + $scope.ovejasPuntaje + $scope.chanchosPuntaje + $scope.ganadoPuntaje + $scope.tierraPuntaje + $scope.valladosPuntaje + $scope.chozaPuntaje + $scope.casaPuntaje + $scope.familiaPuntaje + $scope.puntosPuntaje + $scope.bonusPuntaje;  

 
/* listo el cálculo, guardo sólo el nombre del jugador y el resultado final */

        $scope.aguardar = {
			nombre: infoResultadoNuevo.nombre,
			puntos: $scope.totalPuntaje
		}

/* guardo en el JSON local */
		
        if(!localStorage.getItem("fespiDatos")){
		  $scope.superArray=[];
		}else{
		  $scope.superArray = JSON.parse(localStorage.getItem('fespiDatos'));
		}

        $scope.superArray.push($scope.aguardar);	
		localStorage.setItem( "fespiDatos" , JSON.stringify($scope.superArray));
			
		$location.path("/");


/* guardo en la base */
    
    console.log($scope.aguardar);

        $http({
            method: 'POST',     
            url: 'http://ohno.com.ar/fespicola/agregar.php', 
            data: 'infoResultadoNuevo=' + JSON.stringify($scope.aguardar), 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function sipi(data){
            console.log("se guardo en la base YAY!");
            $scope.allResultados = data.data;
            console.log(data.data);
            $scope.info = '';
            $location.path("/mostrar");
        }, function nopo(data){
            console.log("no se guardo en la base :/");


            //guardo en una key del local que uso cuando no hay conexión para lo que no está sincronizado con la base => fespiDatosSoloLocal - superArraySoloLocal

            if(!localStorage.getItem("fespiDatosSoloLocal")){
                $scope.superArraySoloLocal=[];
            }else{
                $scope.superArraySoloLocal = JSON.parse(localStorage.getItem('fespiDatosSoloLocal'));
            }

            $scope.superArraySoloLocal.push($scope.aguardar);    
            localStorage.setItem( "fespiDatosSoloLocal" , JSON.stringify($scope.superArraySoloLocal));


            $location.path("/mostrar"); 


        }); 
			
    }
	
});


fespi.controller("resultadosController", function ($scope, $http, $location) {


/* MOSTRAR los resultados */
    
    // esto sincroniza y postea lo que quedo sólo en el local con syncResultados().

    $http({
        method: 'POST',     
        url: 'http://ohno.com.ar/fespicola/sincronizar.php', 
        data: 'fespiDatosSoloLocal=' + localStorage.getItem('fespiDatosSoloLocal'), 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function sipi(data){
        
        // una vez que se sincronizó, borro la key del local donde guardo los datos que no están sincronizados con la base
        localStorage.removeItem('fespiDatosSoloLocal');
        console.log("se vació fespiDatosSoloLocal");


        // ahora sincronizo los que tengo que borrar

        $http({
        method: 'POST',     
        url: 'http://ohno.com.ar/fespicola/sincronizarborrados.php', 
        data: 'fespiDatosAborrar=' + localStorage.getItem('fespiDatosAborrar'), 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function sipi(data) {


        // una vez que se sincronizaron los borrados, borro la key del local donde guardo los resultados borrados que no estaban sincronizados con la base
        localStorage.removeItem('fespiDatosAborrar');
        console.log("se vació fespiDatosAborrar");


        // esto levanta la info de la base con getResultados().

        $http({
            method: 'GET',
            url: 'http://ohno.com.ar/fespicola/mostrar.php'
        }).then(function sipi(data) {
            
            if(data.data.length > 0){
                $scope.allResultados = data.data;  
                console.log("entra al success del mostrar");

            }            
        });

    });

    }, function no(data){

        //si no se puede conectar con la base, levanta del local de la key general (que tiene todo).

        $scope.allResultados = JSON.parse(localStorage.getItem('fespiDatos'));
        console.log("no hay internet, levantamos del local y está todo bien (:");
    }); 



/* eliminar un resultado */
    
    $scope.borrar = function(x){

        if(!localStorage.getItem("fespiDatosSoloLocal")){
          $scope.superArraySoloLocal=[];
      }else{
          $scope.superArraySoloLocal = JSON.parse(localStorage.getItem('fespiDatosSoloLocal'));
      }


    //borro del fespiDatosSoloLocal para los casos en los cuales creo y borro el mismo resultado estando offline.

    console.log('antes hay: %s items',  $scope.superArraySoloLocal.length)
    $scope.superArraySoloLocal.splice($scope.superArraySoloLocal.indexOf(x), 1);
    console.log('despues hay: %s items',  $scope.superArraySoloLocal.length)
    localStorage.removeItem("fespiDatosSoloLocal");
      
    $scope.superArraySoloLocalNew = [];
    angular.forEach($scope.superArraySoloLocal, function(x) {
        $scope.superArraySoloLocalNew.push(x);
            
        localStorage.setItem("fespiDatosSoloLocal", JSON.stringify($scope.superArraySoloLocal))
    });


    //borro del local storage

	localStorage.removeItem("fespiDatos");
	$scope.allResultados.splice($scope.allResultados.indexOf(x), 1);
			
	$scope.nuevaLista = [];
	
    angular.forEach($scope.allResultados, function(x) {
		$scope.nuevaLista.push(x);
		localStorage.setItem("fespiDatos", JSON.stringify($scope.nuevaLista))
	});

                
        $http({ 
            method: 'POST',
            url: 'http://ohno.com.ar/fespicola/eliminar.php', 
            data: 'idResultado=' + x.id,  
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then(function sipi(data){
            $scope.allResultados = data.data;
            console.log("chau chau resultado");
            $location.path("/mostrar");

        },function no (data){
            console.log("no se borró de la base");


            //guardo en una key del local que uso cuando no hay conexión para los que borré del local pero no de la base en dónde guardo sólo el ID. => fespiDatosAborrar - superArrayAborrar

            if(!localStorage.getItem("fespiDatosAborrar")){
                $scope.superArrayAborrar=[];
            }else{
                $scope.superArrayAborrar = JSON.parse(localStorage.getItem('fespiDatosAborrar'));
            }

            $scope.superArrayAborrar.push(x.id);    
            localStorage.setItem( "fespiDatosAborrar" , JSON.stringify($scope.superArrayAborrar));

        });
    }
});
