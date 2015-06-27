'use strict';

angular.module('sedadApp')
	.factory('Periodo', ['$resource', 'SEDAD_API_V1_URL', function($resource, API){
		var res = $resource(API + '/periodos_academicos/:id', {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
		return res;
	}]);