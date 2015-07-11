'use strict';

angular.module('sedadApp')
	.factory('Instrumento', ['$resource', 'SEDAD_API_V1_URL', function($resource, API){
		var res = $resource(API + '/instrumentos/:id', {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
		return res;
	}]);