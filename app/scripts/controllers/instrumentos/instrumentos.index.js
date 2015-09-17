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
console.log($scope.instrumentosDisponibles);
    $scope.eliminarInstrumento = function(instrumento) {
        var indices = getIdxInstrumento(instrumento);
        Instrumento.delete({id: instrumento.id}, function(data) {
            console.log(data);
            $scope.instrumentosDisponibles.splice(indices.instrumento_idx,1);
            console.log("Instrumento eliminado");
        });
    };

    var getIdxInstrumento = function(instrumento) {
        var indices = {};
        for(var ii = 0, ni = $scope.instrumentosDisponibles.length; ii < ni; ii++) {
            if($scope.instrumentosDisponibles[ii] == instrumento) {
                indices = { "instrumento_idx":ii };
                console.log(indices);
                return indices;
            }
        }
    };
  }]);
