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
		verInstrumentos: "verInstrumento",
		crearInstrumentos: "crearInstrumento",
		editarInstrumentos: "editarInstrumento",
		eliminarInstrumentos: "eliminarInstrumento",
		listarConsultasSinResponder: "listarConsultasSinResponder",
		responderConsultas: "responderConsulta",
		crearPeriodo: "crearPeriodo",
		listarPeriodos: "listarPeriodos",
		listarReportes: "listarReportes",
		listarGraficas: "listarGraficas"
	});