'use strict';

angular.module('sedadApp')
	.controller('PeriodosIndexCtrl', ['$scope', '$http', 'Periodo', 'SEDAD_API_V1_URL', function($scope, $http, Periodo, SEDAD_API_V1_URL){
		$scope.periodos = Periodo.query();
        $scope.nuevo_periodo='';
		
		$scope.eliminarPeriodo = function(periodo){
			// $scope.periodos.splice(periodo.id,1);
			Periodo.delete({id: periodo.id});
			// periodo.$delete(function(){
				for(var i=0, n=$scope.periodos.lenght; i<n; ++i){
					if($scope.periodos[i].id === periodo.id){
						$scope.periodos.splice(i, 1);
						break;
					};
				};
			// });
			
		};

		$scope.sincronizar = function(solicitud, index) {
			var periodo = $scope.periodos[index];

			if(solicitud == 'asignaturas') {
				$http.get(SEDAD_API_V1_URL + '/periodos_academicos/'+periodo.periodo+'/sincronizar_asignaturas')
		          .success(function(data, status, headers, config) {
		          	$scope.periodos[index].sincronizacion = data.sincronizacion;
		            console.log("Asignaturas sincronizadas");
		          })
		          .error(function(data, status, headers, config) {
		            console.log(data);
		          // called asynchronously if an error occurs
		          // or server returns response with an error status.
		        });
			}
			else if(solicitud == 'estudiantes') {
				$http.get(SEDAD_API_V1_URL + '/periodos_academicos/'+periodo.periodo+'/sincronizar_estudiantes')
		          .success(function(data, status, headers, config) {
		          	$scope.periodos[index].sincronizacion = data.sincronizacion;
		            console.log("Estudiantes sincronizados");
		          })
		          .error(function(data, status, headers, config) {
		            console.log(data);
		          // called asynchronously if an error occurs
		          // or server returns response with an error status.
		        });
			}
		}
	}]);