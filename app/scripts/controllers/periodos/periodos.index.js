'use strict';

angular.module('sedadApp')
	.controller('PeriodosIndexCtrl', ['$scope', 'Periodo', function($scope, Periodo){
		$scope.periodos = Periodo.query();

		console.log($scope.periodos);
	}]);