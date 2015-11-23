'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('RolesEditCtrl', ['$http', '$scope', '$stateParams', 'Rol', 'RolCompleto', 'SEDAD_API_V1_URL', 'Notification', function ($http, $scope, $stateParams, Rol, RolCompleto, SEDAD_API_V1_URL, Notification) {
  	$scope.permisos_seleccionados = {};
  	var cruzarPermisos = function(permisos_rol) {
  		for(var i = 0, n = $scope.rolCompleto.permisos.length; i < n; i++) {
  			$scope.rolCompleto.permisos[i].existe = false;
  			for(var j = 0, m = $scope.rolCompleto.permisos_rol.length; j < m; j++) {
	  			if($scope.rolCompleto.permisos[i].id == $scope.rolCompleto.permisos_rol[j]) {
            $scope.permisos_seleccionados[$scope.rolCompleto.permisos[i].id] = true;
            $scope.rolCompleto.permisos[i].existe = true;
            break;
          }
        }
      }
    }

    $scope.guardar = function() {
      var permisos_rol_ids = [];
      console.log($scope.permisos_seleccionados);
  		angular.forEach($scope.permisos_seleccionados, function(value, key) {
  			if(value) {
  				console.log(key+" "+value);
				  permisos_rol_ids.unshift(key);
  			}
		  });
  		console.log(permisos_rol_ids);

  		$http.put(SEDAD_API_V1_URL + '/roles/' + $scope.rolCompleto.rol.id, { 'permisos_rol': permisos_rol_ids  })
	    	.success(function(data, status, headers, config) {
	    		$scope.rolCompleto = data
	    		cruzarPermisos(data.permisos_rol);
	    		Notification.success("Permisos asignados");
	    	})
	    	.error(function(data, status, headers, config) {
          console.log(data);
	    		Notification.error(data.message);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
  	};
  	
  	$scope.rolCompleto = RolCompleto.get({id: $stateParams.id}, function(rolCompleto, getResponseHeaders){
	  	cruzarPermisos(rolCompleto.permisos_rol);
	  	return rolCompleto;
  	}, function(error) {
        Notification.error('Error al obtener la información');
    });
  }]);