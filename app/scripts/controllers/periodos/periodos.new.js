'use strict';

angular.module('sedadApp')
	.controller('PeriodosNewCtrl', ['$scope', 'Periodo', 'Instrumento', 'Notification', function($scope, Periodo, Instrumento, Notification){
		$scope.instrumentosDisponibles = Instrumento.query();
        $scope.nuevoPeriodo = '';
        $scope.instrumentoSeleccionado = {}
		
		$scope.guardar = function() {
			Periodo.save({ periodo_academico: { periodo: $scope.nuevoPeriodo, instrumento_id: $scope.instrumentoSeleccionado.id } }, function(data) {
                if(data.estatus == "OK") {
                    console.log(data);
	                Notification.success("Instrumento creado");
					$state.go('main');
                }
                else {
                    console.log(data);
                }
            });
		};
	}]);