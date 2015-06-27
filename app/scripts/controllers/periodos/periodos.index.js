'use strict';

angular.module('sedadApp')
	.controller('PeriodosIndexCtrl', ['$scope', 'Periodo', function($scope, Periodo){
		$scope.periodos = Periodo.query();

		console.log($scope.periodos);
		
		$scope.eliminarPeriodo = function(periodo){
			periodo.$delete(function(){
				for(var i=0, n=$scope.periodos.lenght; i<n; ++i){
					if($scope.periodos[i].id === periodo.id){
						$scope.periodos.splice(i, 1);
						break;
					}
				}
			});
		};
	}]);