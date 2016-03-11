'use strict';

angular.module('sedadApp')
	.controller('PeriodosIndexCtrl', ['$scope', '$http', 'Periodo', 'SEDAD_API_V1_URL', 'Notification', function($scope, $http, Periodo, SEDAD_API_V1_URL, Notification){
		$scope.periodos = Periodo.query(function(data) {
            return data;  
        }, function(error) {
            Notification.error('Error al obtener listado');
        });
        $scope.nuevo_periodo='';
		
		$scope.eliminarPeriodo = function(periodo){
			// TODO	
			// Verificar que el período no tenga respuestas

			Periodo.delete({id: periodo.id}, 
            function(data) {
                Notification.error('Período eliminado');
				for(var i=0, n=$scope.periodos.lenght; i<n; ++i){
					if($scope.periodos[i].id === periodo.id){
						$scope.periodos.splice(i, 1);
						break;
					};
				};
            }, 
            function(error) {
                Notification.error('No se pudo guardar el instrumento');
            });			
		};

		$scope.sincronizar = function(solicitud, p) {
			var periodo = p;
          	var index = $scope.periodos.indexOf(p);
			if(solicitud == 'asignaturas') {
				$http.get(SEDAD_API_V1_URL + '/periodos_academicos/'+periodo.periodo+'/sincronizar_asignaturas')
		          .success(function(data, status, headers, config) {
		          	$scope.periodos[index].sincronizacion = data.sincronizacion;
		            Notification.success("Asignaturas sincronizadas");
		          })
		          .error(function(data, status, headers, config) {
		          	if(status == 304) {
		          		Notification.warning('Información sin cambios');
		          	} 
		          	else {
		          		Notification.error('Error al sincronizar asignaturas');
		          	}
		            console.log(data);
		          // called asynchronously if an error occurs
		          // or server returns response with an error status.
		        });
			}
			else if(solicitud == 'estudiantes') {
				$http.get(SEDAD_API_V1_URL + '/periodos_academicos/'+periodo.periodo+'/sincronizar_estudiantes')
		          .success(function(data, status, headers, config) {
		          	$scope.periodos[index].sincronizacion = data.sincronizacion;
		            Notification.success("Estudiantes sincronizados");
		          })
		          .error(function(data, status, headers, config) {
		          	if(status == 304) {
		          		Notification.warning('Información sin cambios');
		          	} 
		          	else {
			            Notification.error('Error al sincronizar estudiantes');
			        }
		            console.log(data);
		          // called asynchronously if an error occurs
		          // or server returns response with an error status.
		        });
			}
		}
	}]);