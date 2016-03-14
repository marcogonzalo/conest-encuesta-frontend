'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('UsuariosEditCtrl', ['$http', '$scope', '$state', '$stateParams', 'CurrentUser', 'Rol', 'SEDAD_API_V1_URL', 'Notification', function ($http, $scope, $state, $stateParams, CurrentUser, Rol, SEDAD_API_V1_URL, Notification) {
    $scope.usuarioEditar = {};
    $scope.rol_seleccionado = {};
    var u = CurrentUser.user();
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
            Notification.success("Rol asignado");
            $state.go('usuarios.index');
          })
          .error(function(data, status, headers, config) {
            Notification.error(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      }
    };
    
    $http.get(SEDAD_API_V1_URL + '/usuarios/' + $stateParams.id + '/editar')
      .success(function(data, status, headers, config) {
        if(data.usuario !== null) {
          if(data.usuario.cedula != u.cedula) {
            $scope.usuarioEditar = data;
            cruzarRol(data.usuario.rol_id);
          } 
          else {
            Notification.error('No se pudo obtener el usuario o no puede editarse');
            $state.go('usuarios.index');
          }
        }
        else {
          Notification.error('No se pudo obtener el usuario o no puede editarse');
          $state.go('usuarios.index');
        }
      })
      .error(function(data, status, headers, config) {
          Notification.error('Error al obtener la información');
          console.log(data);
      });
  }]);