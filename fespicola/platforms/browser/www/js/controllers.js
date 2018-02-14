var bares = angular.module('bares', ['ngRoute', 'mobile-angular-ui', 'ngInput', 'mobile-angular-ui.gestures', 'angular.http-loader']);

bares.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/inicio.html',
        controller: 'mostrarBarController',
        reloadOnSearch: false
    }).when('/ingresar', {
        templateUrl: 'partials/ingresar.html',
        controller: 'ingresarBarController',
        reloadOnSearch: false
    }).when('/suerte', {
        templateUrl: 'partials/random.html',
        reloadOnSearch: false
    }).when('/info', {
        templateUrl: 'partials/informacion.html',
        reloadOnSearch: false
    }).when('/top_five', {
        templateUrl: 'partials/top_five.html',
        controller: 'topFiveController',
        reloadOnSearch: false
    }).otherwise({
        redirectTo: '/'
    });
})
.controller("ingresarBarController", function($scope, $http, $location) {

    $scope.categorias = [
        { id: 1, cat: "Bar" },
        { id: 2, cat: "Cafetería" },
        { id: 3, cat: "Restaurant" }
    ];

    $scope.GuardarBar = function(info) {

        if (!localStorage.getItem('nuevoBar')) {
            $scope.hay_bares = [];
        } else {
            $scope.hay_bares = JSON.parse(localStorage.getItem('nuevoBar'));   
        }

        $scope.info = {
            nombre: info.nombre,
            comida: info.comida,
            direccion: info.direccion,
            barrio: info.barrio,
            tipo: info.tipo
        }

        $scope.hay_bares.push($scope.info);
        localStorage.setItem('nuevoBar', JSON.stringify($scope.hay_bares));
        $scope.get_bares = localStorage.getItem("nuevoBar");
        $location.path("/"); 

        $http({
            method: 'POST',     
            url: 'http://www.florenciasepulveda.com/crawler/php/agregar.php', 
            data: 'campos_bares=' + JSON.stringify($scope.info), 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            loader: 'loading'
        }).then(function exito(data){
            $scope.bares_todos = data.data; 
            $scope.info = '';
            $location.path("/");
        }, function no(data){
            if($scope.get_bares !== null){
                $scope.hay_bares = JSON.parse($scope.get_bares);
                $location.path("/"); 
            } 
        });
    }   
})
.controller("mostrarBarController", function($scope, $http, $location) {

    /* MOSTRAR */
    $http({
        method: 'POST',     
        url: 'http://www.florenciasepulveda.com/crawler/php/sincronizar.php', 
        data: 'bares_local=' + localStorage.getItem('nuevoBar'), 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        loader: 'loading'
    }).then(function exito(data){
        $http({
            method: 'GET',
            url: 'http://www.florenciasepulveda.com/crawler/php/mostrar.php',
            loader: 'loading'
        }).then(function exito(data) {
            if(data.data.length > 0){
                $scope.bares_todos = data.data;    
                removeRandomIcon();
                $scope.getRandom();           
            }            
        });
    }, function no(data){
        $scope.bares_todos = JSON.parse(localStorage.getItem('nuevoBar'));
        removeRandomIcon();
        $scope.getRandom();
    }); 
    
    /* BORRAR */
    $scope.borrar_bar = function(bar) {
        
        localStorage.removeItem('nuevoBar');
        var pos = 0;
        for(var i = 0; i < $scope.bares_todos.length; i++){
            if($scope.bares_todos[i].id == bar){
                pos = i;
            }
        }
        $scope.bares_todos.splice(pos, 1);
        $scope.bares_ok = [];
        angular.forEach($scope.bares_todos, function(bar) {
            $scope.bares_ok.push(bar);
            localStorage.setItem('nuevoBar', JSON.stringify($scope.bares_ok));
        });

        removeRandomIcon();

        $http({ 
            method: 'POST',
            url: 'http://www.florenciasepulveda.com/crawler/php/eliminar.php', 
            data: 'id_bar=' + bar,  
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            loader: 'loading'
        }).then(function ok(data){
            $scope.bares_todos = data.data ;
            $location.path("/"); 
            removeRandomIcon();
        });        
    }      

    /* RANDOM */
    $scope.getRandom = function(bar) {
        if ($scope.bares_todos != null && $scope.bares_todos.length > 1) {
            $scope.bar_random =  $scope.bares_todos[Math.floor(Math.random() * $scope.bares_todos.length)];
        }
    }

    /* MOSTRAR ICONO DE RANDOM SOLO SI HAY MAS DE UN BAR CARGADO */
    function removeRandomIcon() {
        var random_icon = document.getElementsByClassName('random_icon')[0];
        if ($scope.bares_todos != null && $scope.bares_todos.length > 1) {
            random_icon.style.display = "table-cell";
        } else {
            random_icon.style.display = "none";
        }
    }      
})
.controller("topFiveController", function($scope, $http) {
    $http.get("http://florenciasepulveda.com/crawler/json/top_five.php")
    .then(function exito(respuesta) {
        localStorage.setItem("top_bares", angular.toJson(respuesta.data));
		$scope.mostrar_top_bares = angular.fromJson(respuesta.data);
    }, function error(respuesta) {
        $scope.bares_local = localStorage.getItem("top_bares");
        if ($scope.bares_local != "undefined" && $scope.bares_local != null) {
        	$scope.bar_l = JSON.parse($scope.bares_local);
        } else {
            $scope.no_local = "por el momento no hay bares cargados";
        }
	});
});






