'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('InstrumentosIndexCtrl', ['$scope', 'Instrumento', 'Notification', function ($scope, Instrumento, Notification) {
    $scope.instrumentosDisponibles = Instrumento.query();
    $scope.eliminarInstrumento = function(instrumento) {
        var indices = getIdxInstrumento(instrumento);
        Instrumento.delete({id: instrumento.id}, function(data) {
            console.log(data);
            $scope.instrumentosDisponibles.splice(indices.instrumento_idx,1);
            Notification.success("Instrumento eliminado");
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
