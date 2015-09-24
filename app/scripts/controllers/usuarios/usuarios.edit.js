'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('UsuariosEditCtrl', ['$http', '$scope', '$stateParams', 'Rol', 'UsuarioEditar', 'SEDAD_API_V1_URL', function ($http, $scope, $stateParams, Rol, UsuarioEditar, SEDAD_API_V1_URL) {
  	$scope.rol_seleccionado = {};
  	var cruzarRol  = function() {
  		for(var i = 0, n = $scope.usuarioEditar.roles.length; i < n; i++) {
        if($scope.usuarioEditar.usuario.rol_id == $scope.usuarioEditar.roles[i].id) {
          $scope.rol_seleccionado = $scope.usuarioEditar.roles[i];
          break;
        }
      }
    }

  	$scope.guardar = function() {
  		if($scope.rol_seleccionado) {
  			$scope.usuarioEditar.usuario.rol_id = $scope.rol_seleccionado.id;

        $http.put(SEDAD_API_V1_URL + '/usuarios/' + $scope.usuarioEditar.usuario.cedula, { 'rol_id': $scope.rol_seleccionado.id })
          .success(function(data, status, headers, config) {
            console.log("Rol asignado");
          })
          .error(function(data, status, headers, config) {
            console.log(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  		}
  	};
  	
  	$scope.usuarioEditar = UsuarioEditar.get({id: $stateParams.id}, function(UsuarioEditar, getResponseHeaders){
	  	cruzarRol(UsuarioEditar.rol_id);
	  	return UsuarioEditar;
  	});
  }]);