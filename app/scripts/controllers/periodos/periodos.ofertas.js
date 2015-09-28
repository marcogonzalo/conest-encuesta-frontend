'use strict';

angular.module('sedadApp')
	.controller('PeriodosOfertasCtrl', ['$scope', '$stateParams', '$http', 'Periodo', 'Instrumento', 'SEDAD_API_V1_URL', function($scope, $stateParams, $http, Periodo, Instrumento, SEDAD_API_V1_URL){
		$scope.ofertasEnPeriodo = [];
		$scope.periodo = {}
		$scope.instrumentosDisponibles = Instrumento.query();

	    // Verificar si se existe un id como parametro de la llamada
	    if($stateParams.periodo != null) {
	    	console.log($stateParams.periodo);
			Periodo.get({id: $stateParams.periodo}, function(periodo, getResponseHeaders) {
	        	$scope.periodo = periodo;
				console.log(periodo);
	        	// Si existe un id, se solicita el instrumento
		        $http.get(SEDAD_API_V1_URL + '/periodos_academicos/'+periodo.periodo+'/ofertas_periodo')
		        	.success(function(data, status, headers, config) {
						$scope.ofertasEnPeriodo = data;
						console.log(data);
						console.log(status);
						console.log(headers);
						console.log(config);
					})
					.error(function(data, status, headers, config) {
						console.log(data);
						// called asynchronously if an error occurs
						// or server returns response with an error status.
					});
				console.log($scope.ofertasEnPeriodo);
			});
	    }
	    else {
	    }

	    var getIdxOferta = function(oferta) {
	        var indices = {};
	        for(var i = 0, n = $scope.ofertasEnPeriodo.length; i < n; i++) {
	            if($scope.ofertasEnPeriodo[i] == oferta) {
	                indices = { "oferta_idx":i };
	                console.log(indices);
	                return indices;
	            }
	        }
	        return indices;
	    };

		$scope.cambiarInstrumento = function(oferta) {
			var indices = getIdxOferta(oferta);

			// Si el boton de cambiar instrumento ya había sido marcado
			if($scope.ofertasEnPeriodo[indices.oferta_idx].cambiarInstrumento) {
				// Si el instrumento seleccionado es distinto al que se recibio en la consulta
				if($scope.ofertasEnPeriodo[indices.oferta_idx].instrumentoSeleccionado.id != $scope.ofertasEnPeriodo[indices.oferta_idx].instrumento_de_consulta.id) {
					// Asociar instrumento a consulta4
					$http.put(SEDAD_API_V1_URL + '/ofertas_periodo/'+oferta.id+'/cambiar_instrumento', { instrumento_id: $scope.ofertasEnPeriodo[indices.oferta_idx].instrumentoSeleccionado.id })
						.success(function(data, status, headers, config) {
							console.log(data);
							if(data.estatus == 'OK') {
								console.log(data.mensaje);
								$scope.ofertasEnPeriodo[indices.oferta_idx].instrumento_de_consulta = $scope.ofertasEnPeriodo[indices.oferta_idx].instrumentoSeleccionado;
							}
						})
						.error(function(data, status, headers, config) {
							console.log(data);
							// called asynchronously if an error occurs
							// or server returns response with an error status.
						});
				}
				$scope.ofertasEnPeriodo[indices.oferta_idx].cambiarInstrumento = false;
			}
			// Si el botón de cambiar instrumento no estaba accionado
			else {
				$scope.ofertasEnPeriodo[indices.oferta_idx].cambiarInstrumento = true;
				$scope.ofertasEnPeriodo[indices.oferta_idx].instrumentoSeleccionado = $scope.ofertasEnPeriodo[indices.oferta_idx].instrumento_de_consulta;
			}
		};
	}]);