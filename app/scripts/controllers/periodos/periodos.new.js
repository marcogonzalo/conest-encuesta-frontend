'use strict';

angular.module('sedadApp')
	.controller('PeriodosNewCtrl', ['$scope', 'Periodo', 'Instrumento', 'Notification', function($scope, Periodo, Instrumento, Notification){
		$scope.instrumentosDisponibles = Instrumento.query(function(data) {
            return data;  
        }, function(error) {
            Notification.error('Error al obtener listado de instrumentos');
        });
        $scope.nuevoPeriodo = '';
        $scope.instrumentoSeleccionado = {}
		
        var validar = function(periodo) {
            var re = /(01|02)-[\d]{4}/;
            console.log(periodo);
            console.log(re.test(periodo));
            return re.test(periodo);
        } 

		$scope.guardar = function() {
            if(validar($scope.nuevoPeriodo)) {
    			Periodo.save({ periodo_academico: { periodo: $scope.nuevoPeriodo, instrumento_id: $scope.instrumentoSeleccionado.id } }, function(data) {
                    if(data.estatus == "OK") {
    	                Notification.success("Período registrado");
    					$state.go('main');
                    }
                    else {
                    	Notification.error("No se pudo sincronizar el período")
                    	console.log(data);
                    }
                },
                function(error) {
                    if(error.status == 304) {
    	                Notification.warning("Este período ya se encuentra registrado");
                    }
                    else {
                        Notification.error("No se pudo sincronizar el período")
                        console.log(error);
                    }
                });
            }
            else {
            	Notification.error("El período introducido no es válido")        
            }
		};
	}]);