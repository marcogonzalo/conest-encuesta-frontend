'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('InstrumentosIndexCtrl', ['$scope', function ($scope) {
    $scope.instrumentosDisponibles = [
      {
        'id': '1',
        'nombre': 'Instrumento 1',
        'updated_at': '2015-05-14T09:00:00'
      },
      {
        'id': '2',
        'nombre': 'Instrumento 2',
        'updated_at': '2015-05-14T09:00:00'
      },
      {
        'id': '3',
        'nombre': 'Instrumento 3',
        'updated_at': '2015-05-14T09:00:00'
      },
      {
        'id': '4',
        'nombre': 'Instrumento 4',
        'updated_at': '2015-05-14T09:00:00'
      },
      {
        'id': '5',
        'nombre': 'Instrumento 5',
        'updated_at': '2015-05-14T09:00:00'
      },
      {
        'id': '6',
        'nombre': 'Instrumento 6',
        'updated_at': '2015-05-14T09:00:00'
      },
      {
        'id': '7',
        'nombre': 'Instrumento 7',
        'updated_at': '2015-05-14T09:00:00'
      },
      {
        'id': '8',
        'nombre': 'Instrumento 8',
        'updated_at': '2015-05-14T09:00:00'
      }
    ];
    angular.forEach($scope.instrumentosDisponibles, function(instrumentosDisponible) {
      instrumentosDisponible.rank = Math.random();
    });
  }]);
