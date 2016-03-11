'use strict';

angular.module('sedadApp')
	.controller('PeriodosNewCtrl', ['$scope', '$state', 'Periodo', 'Instrumento', 'SEDAD_API_V1_URL', 'Notification', function($scope, $state, Periodo, Instrumento, SEDAD_API_V1_URL, Notification){
        $scope.generar_token = false
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

        /*$scope.solicitar_token = function() {
            $http.post(SEDAD_API_V1_URL + '/api/v1/tokens', {}).success(function() {
                Notification.info("Token de servidor registrado");
                $scope.generar_token = false
            })
        }*/

        $scope.guardar = function() {
            if(validar($scope.nuevoPeriodo)) {
                Periodo.save({ periodo_academico: { periodo: $scope.nuevoPeriodo, instrumento_id: $scope.instrumentoSeleccionado.id } }, function(data) {
                    if(data.estatus == "OK") {
                        Notification.success("Período registrado");
    					$state.go('periodos.index');
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
                        Notification.error({ title: "No se pudo sincronizar el período", message: error.data.mensaje, delay: 25000 })
                        //$scope.generar_token = true;
                    }
                });
            }
            else {
            	Notification.error("El período introducido no es válido")        
            }
		};
	}]);