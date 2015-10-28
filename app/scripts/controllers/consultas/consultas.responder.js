'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:ConsultasIndexCtrl
 * @description
 * # ConsultasIndexCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('ConsultasResponderCtrl', ['$scope', '$stateParams', '$http', 'Instrumento', 'CurrentUser', 'SEDAD_API_V1_URL', 'Notification', function ($scope, $stateParams, $http, Instrumento, CurrentUser, SEDAD_API_V1_URL, Notification) {
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
		
		    Instrumento.get({id: data.instrumento_id}, function(instrumento, getResponseHeaders){
			    console.log(instrumento);
			    $scope.consulta.instrumento = instrumento;
			    $scope.consulta.oferta_academica = data.oferta_academica;

		        console.log("después de cargar estructura");
		        console.log($scope.respuesta.respuestas);
	        });
		})
    	.error(function(data, status, headers, config) {
    		Notification.error('Error al construir la consulta');
    		console.log(data);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

    $scope.responderConsulta = function() {
    	$scope.respuesta.cedula_estudiante = u.cedula;

	    // Recrear preguntas de instrumetno en estructura de respuestas
	    for(var bi = 0, nb = $scope.consulta.instrumento.bloques.length; bi < nb; bi++) {
            for(var pi = 0, np = $scope.consulta.instrumento.bloques[bi].preguntas.length; pi < np; pi++) {
            	var pregunta = $scope.consulta.instrumento.bloques[bi].preguntas[pi];
            	if(pregunta.respuesta !== null && typeof pregunta.respuesta !== 'undefined') {
	            	$scope.respuesta.respuestas.splice(pregunta.id,0,{ "pregunta_id": pregunta.id, "valor": pregunta.respuesta});
	            }
            }
        }
    	
    	console.log($scope.respuesta);

	   	$http.post(SEDAD_API_V1_URL + '/consultas/' + $stateParams.id + '/responder', { "consulta": $scope.respuesta })
	    	.success(function(data, status, headers, config) {
	    		Notification.success('Consulta respondida satisfactoriamente');
	    		console.log(data);
	    	})
	    	.error(function(data, status, headers, config) {
	    		Notification.error('Hubo un error al responder la consulta');
	    		console.log(data);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
	};
  }]);
