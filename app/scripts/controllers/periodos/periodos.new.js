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
	                Notification.success("Período registrado");
					$state.go('main');
                }
                else {
                	Notification.error("No se pudo sincronizar el período")
                    console.log(data);
                }
            },
            function(error) {
            	if(error.estatus == 304) {
	                Notification.warning("Este período ya se encuentra registrado");
                }
                else {
                	Notification.error("No se pudo sincronizar el período")
                }
            });
		};
	}]);