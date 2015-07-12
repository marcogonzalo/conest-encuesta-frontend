'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:ConsultasIndexCtrl
 * @description
 * # ConsultasIndexCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('ConsultasResponderCtrl', ['$scope', '$stateParams', '$http', 'Instrumento', 'CurrentUser', 'SEDAD_API_V1_URL', function ($scope, $stateParams, $http, Instrumento, CurrentUser, SEDAD_API_V1_URL) {
    var u = CurrentUser.user();

    $scope.consulta = {
    	"instrumento": null,
    	"oferta_academica": null
    }
    $scope.respuesta = {
    	"cedula_estudiante": null,
    	"respuestas": []
    };

    $http.get(SEDAD_API_V1_URL + '/consultas/' + $stateParams.id)
    	.success(function(data, status, headers, config) {
    		console.log(data);
    		console.log("Consulta respondida");
		
		    var instrumento = Instrumento.get({id: data.instrumento_id});
		    $scope.consulta.instrumento = instrumento;
		    $scope.consulta.oferta_academica = data.oferta_academica;
		})
    	.error(function(data, status, headers, config) {
    		console.log(data);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

    $scope

    $scope.responderConsulta = function() {
    	$scope.respuesta.cedula_estudiante = u.cedula;

    	console.log($scope.respuesta);

	   /* $http.post(SEDAD_API_V1_URL + '/consultas/responder', $scope.respuesta)
	    	.success(function(data, status, headers, config) {
	    		console.log(data);
	    		console.log("Consulta respondida");
	    	})
	    	.error(function(data, status, headers, config) {
	    		console.log(data);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});*/
	};
  }]);
