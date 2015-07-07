'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('InstrumentosIndexCtrl', ['$scope', 'Instrumento', function ($scope, Instrumento) {
    $scope.instrumentosDisponibles = Instrumento.query();

    $scope.eliminar = function() {
        Instrumento.delete($scope.instrumento, function(data) {
            console.log(data);
            console.log("Instrumento creado");
        });
    };
  }]);
