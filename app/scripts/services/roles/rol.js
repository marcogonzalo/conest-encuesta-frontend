'use strict';

angular.module('sedadApp')
	.factory('Rol', ['$resource', 'SEDAD_API_V1_URL', function($resource, API){
		var res = $resource(API + '/roles/:id', {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
		return res;
	}])
	.factory('RolCompleto', ['$resource', 'SEDAD_API_V1_URL', function($resource, API){
		var res = $resource(API + '/roles/:id/editar', {id: '@id'}, {
			get: {
				method: 'GET'
			}
		});
		return res;
	}]);