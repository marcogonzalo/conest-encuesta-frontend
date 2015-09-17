'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('RolesEditCtrl', ['$scope', '$stateParams', 'Rol', 'RolCompleto', function ($scope, $stateParams, Rol, RolCompleto) {

  	var cruzarPermisos = function() {
  		for(var i = 0, n = $scope.rolCompleto.permisos.length; i < n; i++) {
  			$scope.rolCompleto.permisos[i].existe = false;
  			for(var j = 0, m = $scope.rolCompleto.permisos_rol.length; j < m; j++) {
	  			console.log($scope.rolCompleto.permisos[i]);
	  			console.log($scope.rolCompleto.permisos_rol[j]);
	  			console.log($scope.rolCompleto.permisos[i].id == $scope.rolCompleto.permisos_rol[j]);
	  			if($scope.rolCompleto.permisos[i].id == $scope.rolCompleto.permisos_rol[j]) {
	                $scope.rolCompleto.permisos[i].existe = true;
	                break;
	            }
            }
        }
  	}
  	
  	$scope.rolCompleto = RolCompleto.get({id: $stateParams.id}, function(rolCompleto, getResponseHeaders){
	  	cruzarPermisos();
	  	return rolCompleto;
  	});

  	console.log($scope.rolCompleto);

  }]);