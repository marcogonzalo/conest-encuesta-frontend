'use strict';

/**
 * @ngdoc constant
 * @name Constantes
 * @description
 * # constantes
 * Constant in the sedadApp.
 */
angular.module('sedadApp')
	.constant('PERMISOS', {
		verInstrumentos: "verInstrumentos",
		crearInstrumentos: "crearInstrumentos",
		editarInstrumentos: "editarInstrumentos",
		eliminarInstrumentos: "eliminarInstrumentos",
		listarConsultasSinResponder: "listarConsultasSinResponder",
		crearPeriodo: "crearPeriodo",
		listarPeriodos: "listarPeriodos",
		listarReportes: "listarReportes"
	});