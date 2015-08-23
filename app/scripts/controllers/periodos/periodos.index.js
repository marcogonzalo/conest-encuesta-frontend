'use strict';

angular.module('sedadApp')
	.controller('PeriodosIndexCtrl', ['$scope', 'Periodo', function($scope, Periodo){
		$scope.periodos = Periodo.query();
        $scope.nuevo_periodo='';
		console.log($scope.periodos);
		
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
		$scope.agregarPeriodo = function(){
			Periodo.post({periodo: $scope.nuevo_periodo});
			// periodo.$delete(function($nuevo_periodo){
             i=$scope.periodos.lenght+1;
             $scope.periodos[i].id=$scope.nuevo_periodo;
				// for(var i=0, n=$scope.periodos.lenght; i<n; ++i){
				// 	if($scope.periodos[i].id === periodo.id){
				// 		$scope.periodos.splice(i, 1);
				// 		break;
				// 	}
				// }
			};
		// };



	}]);