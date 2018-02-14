var fespi = angular.module('fespicola', [
  'ngRoute',
  'mobile-angular-ui',
  'ngInput'
  ]);

fespi.config(function($routeProvider) {
  $routeProvider.when('/',   
	{templateUrl: 'views/home.html', reloadOnSearch: false, controller 	: 'micontroller'});
 $routeProvider.when('/mostrar',  
	{templateUrl: 'views/mostrar.html', controller: 'mostrar', reloadOnSearch: false,
	});
    $routeProvider.when('/cartitas',  
	{templateUrl: 'views/cartitas.html', controller: 'cartitas', reloadOnSearch: false,
	});
     $routeProvider.when('/datitos',  
	{templateUrl: 'views/datitos.html', reloadOnSearch: false,
	});
 	$routeProvider.otherwise({
    redirectTo: '/'
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



fespi.controller("micontroller", function ($scope, $location) {
	$scope.si = true;
    
    $scope.guardar = function(datos){
    
    $campos     = datos.campos;
    $pastos     = datos.pastos;
    $granos     = datos.granos;
    $vegetales  = datos.vegetales;
    $ovejas     = datos.ovejas;
    $chanchos   = datos.chanchos;
    $ganado     = datos.ganado;
    $tierra     = datos.tierra;
    $vallados   = datos.vallados;
    $choza      = datos.choza;
    $casa       = datos.casa;
    $familia    = datos.familia;
    $puntos     = datos.puntos;
    $bonus      = datos.bonus;
    

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

  
        $scope.aguardar={
			nombre:datos.nombre,
			puntillos: $scope.totalPuntaje
		}
		
        if(!localStorage.getItem("fespiDatos")){
		  $scope.superArray=[];
		}else{
		  $scope.superArray = JSON.parse(localStorage.getItem('fespiDatos'));
		}
        $scope.superArray.push($scope.aguardar);
			
		localStorage.setItem( "fespiDatos" , JSON.stringify($scope.superArray));
			
		$location.path("/mostrar"); 
			
		}
	
});

fespi.controller("mostrar", function ($scope) { 
	$scope.levantaInfo = JSON.parse(localStorage.getItem('fespiDatos'));
    
    
    $scope.borrar = function(x){
		localStorage.removeItem("fespiDatos");
			$scope.levantaInfo.splice($scope.levantaInfo.indexOf(x), 1);
			
			$scope.nuevaLista = [];
			angular.forEach($scope.levantaInfo, function(x) {
				$scope.nuevaLista.push(x);
			
				localStorage.setItem("fespiDatos", JSON.stringify($scope.nuevaLista))
			});
		}
    
});


