'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('UsuariosIndexCtrl', ['$scope', 'Usuario', function ($scope, Usuario) {
    $scope.usuarios = Usuario.query();
  }]);
