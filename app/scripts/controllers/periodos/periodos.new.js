'use strict';

angular.module('sedadApp')
	.controller('PeriodosNewCtrl', ['$scope', 'Periodo', 'Instrumento', function($scope, Periodo, Instrumento){
		$scope.instrumentosDisponibles = Instrumento.query();
        $scope.nuevoPeriodo = '';
        $scope.instrumentoSeleccionado = {}
		
		$scope.guardar = function() {
			Periodo.save({ periodo_academico: { periodo: $scope.nuevoPeriodo, instrumento_id: $scope.instrumentoSeleccionado.id } }, function(data) {
                if(data.estatus == "OK") {
                    console.log(data);
	                console.log("Instrumento creado");
					$state.go('main');
                }
                else {
                    console.log(data);
                }
            });
		};
	}]);