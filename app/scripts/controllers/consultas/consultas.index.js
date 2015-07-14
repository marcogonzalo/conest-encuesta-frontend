'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:ConsultasIndexCtrl
 * @description
 * # ConsultasIndexCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('ConsultasIndexCtrl', ['$scope', '$http', 'CurrentUser', 'SEDAD_API_V1_URL', function ($scope, $http, CurrentUser, SEDAD_API_V1_URL) {
    var u = CurrentUser.user();
    $http.get(SEDAD_API_V1_URL + '/estudiantes/'+u.cedula+'/consultas_sin_responder')
    	.success(function(data, status, headers, config) {
    		$scope.consultasSinResponder = data.consultas_sin_responder;
    		console.log($scope.consultasSinResponder);

    	})
    	.error(function(data, status, headers, config) {
    		console.log(data);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
  }]);
