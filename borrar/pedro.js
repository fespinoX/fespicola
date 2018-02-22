
function persist(method, url, prefix, headers, data) {

    request = {
            method: method,     
            url: url, 
            data: prefix + JSON.stringify(data), 
            headers: headers
            }

    if (onLine) {
    $http(request)
    } else {
      putItem(request)
      //esto lo guardo en el local en una key que se llame changes
    }

}



changes.forEach(function(item, index) {
    persist(item.method, item.url, item.prefix, item.headers, item.data).then(delete change).catch(averiguar que error es el de falla de conexión y si es ese ignorarlo, el resto que explote)
    
    
})

persist('POST', 'httpp', 'infoResulta', {}, $scope.aguardar)




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
        