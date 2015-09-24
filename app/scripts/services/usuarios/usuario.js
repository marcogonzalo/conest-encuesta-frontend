'use strict';

angular.module('sedadApp')
	.factory('Usuario', ['$resource', 'SEDAD_API_V1_URL', function($resource, API){
		var res = $resource(API + '/usuarios/:id', {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
		return res;
	}])
	.factory('UsuarioEditar', ['$resource', 'SEDAD_API_V1_URL', function($resource, API){
		var res = $resource(API + '/usuarios/:id/editar', {id: '@id'}, {
			get: {
				method: 'GET'
			}
		});
		return res;
	}]);