'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('RolesIndexCtrl', ['$scope', 'Rol', 'Notification', function ($scope, Rol, Notification) {
    $scope.roles = Rol.query(function(data) {
        return data;  
    }, function(error) {
        Notification.error('Error al obtener listado');
    });

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
